// Rehype plugins for the blog posts. They run after `rehype-raw`, so the
// posts' hand-written HTML (<h1 align="center">…) is already a real tree.

const isEl = (node, tag) => node?.type === 'element' && node.tagName === tag;
const textOf = (node) =>
  node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('');

// Whitespace, comments and <br>s that posts use as top padding.
const isFiller = (node) =>
  node.type === 'comment' ||
  (node.type === 'text' && !node.value.trim()) ||
  isEl(node, 'br');

const nextContent = (nodes, from) => {
  let i = from;
  while (i < nodes.length && isFiller(nodes[i])) i++;
  return i;
};

/**
 * Lifts a post's leading title out of the body so every post page can set its
 * own title block. Handles `# Title` and `<h1 align="center">Title</h1>`, plus a
 * centred `<h2>`/`<h3>` directly beneath it used as a subtitle. Posts without a leading
 * text heading are left untouched.
 */
export function rehypePostTitle() {
  return (tree, file) => {
    const frontmatter = file.data.astro?.frontmatter;
    if (!frontmatter) return;

    const nodes = tree.children;
    const h1At = nextContent(nodes, 0);
    const h1 = nodes[h1At];
    if (!isEl(h1, 'h1')) return;
    const heading = textOf(h1).replace(/\s+/g, ' ').trim();
    if (!heading) return;

    let end = h1At + 1;
    const subAt = nextContent(nodes, end);
    const sub = nodes[subAt];
    if (
      (isEl(sub, 'h2') || isEl(sub, 'h3')) &&
      String(sub.properties?.align).toLowerCase() === 'center'
    ) {
      frontmatter.subheading = textOf(sub).replace(/\s+/g, ' ').trim();
      end = subAt + 1;
    }

    frontmatter.heading = heading;
    nodes.splice(0, nextContent(nodes, end));
  };
}

/**
 * Posts link to each other with absolute URLs (https://karthikeshwar1.github.io/…).
 * Make them root-relative so they stay on-site in local preview too.
 */
export function rehypeLocalLinks() {
  const origin = /^https?:\/\/karthikeshwar1\.github\.io(?=\/|$)/i;
  const walk = (node) => {
    if (isEl(node, 'a') && typeof node.properties?.href === 'string') {
      node.properties.href = node.properties.href.replace(origin, '') || '/';
    }
    node.children?.forEach(walk);
  };
  return (tree) => walk(tree);
}

/**
 * Wide tables scroll inside their own box instead of stretching the page, and
 * images (some are multi-megabyte) load only as they approach the viewport.
 */
export function rehypeReadingView() {
  const walk = (node) => {
    node.children?.forEach((child, i) => {
      if (isEl(child, 'img')) {
        child.properties.loading ??= 'lazy';
        child.properties.decoding ??= 'async';
      }
      walk(child);
      if (isEl(child, 'table')) {
        node.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'], tabIndex: 0 },
          children: [child],
        };
      }
    });
  };
  return (tree) => walk(tree);
}
