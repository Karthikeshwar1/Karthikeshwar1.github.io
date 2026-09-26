import { getCollection, type CollectionEntry } from 'astro:content';

export interface Post {
  entry: CollectionEntry<'blog'>;
  /** Path inside blog/ without `.md`, e.g. "2022/The Healthcare Providers". */
  id: string;
  url: string;
  year: string;
  lang: 'en' | 'kn';
  title: string;
  subtitle?: string;
  /** Plain text of the body, for search. */
  text: string;
  minutes: number;
  /** URL of the same post in the other language, when one exists. */
  translation?: string;
}

export const BOOKS_URL = '/blog/timeless/books_read';

export const postUrl = (id: string) =>
  '/blog/' + id.split('/').map(encodeURIComponent).join('/');

const decode = (s: string) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

export const plainText = (html: string) =>
  decode(html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

const titleFromFilename = (id: string) =>
  id.split('/').pop()!.replace(/_kn$/, '').replace(/[_-]+/g, ' ').trim();

let cache: Post[] | undefined;

/** Every post, newest year first, then alphabetical within a year. */
export async function getPosts(): Promise<Post[]> {
  if (cache) return cache;

  const entries = await getCollection('blog');
  const ids = new Set(entries.map((e) => e.id));

  cache = entries
    .map((entry): Post => {
      const fm = (entry.rendered?.metadata?.frontmatter ?? {}) as Record<string, unknown>;
      const text = plainText(entry.rendered?.html ?? '');
      const lang = entry.id.endsWith('_kn') ? 'kn' : 'en';
      const other = lang === 'kn' ? entry.id.slice(0, -3) : `${entry.id}_kn`;
      return {
        entry,
        id: entry.id,
        url: postUrl(entry.id),
        year: entry.id.split('/')[0],
        lang,
        title: String(fm.heading ?? entry.data.title ?? titleFromFilename(entry.id)),
        subtitle: fm.subheading ? String(fm.subheading) : undefined,
        text,
        minutes: Math.max(1, Math.round(text.split(' ').length / 220)),
        translation: ids.has(other) ? postUrl(other) : undefined,
      };
    })
    .sort((a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title));

  return cache;
}

export async function getPost(id: string): Promise<Post> {
  const post = (await getPosts()).find((p) => p.id === id);
  if (!post) throw new Error(`No post at blog/${id}.md`);
  return post;
}
