const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

function slugify(str) {
  return str.toLowerCase().replace(/[^\w]+/g, '-');
}

// Change as needed
const BLOG_DIR = path.join(__dirname, 'blog');
const OUTPUT = path.join(__dirname, 'search_index.json');
const BASE_URL = 'https://karthikeshwar1.github.io/blog';

const files = glob.sync(`${BLOG_DIR}/**/*.md`);
const docs = files.map(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { data, content: body } = matter(content);
  const relPath = file.replace(BLOG_DIR, '').replace(/\\/g, '/').replace(/^\//, '');
  const url = `${BASE_URL}/${relPath.replace(/\.md$/, '').replace(/ /g, '%20')}`;
  return {
    title: data.title || path.basename(file, '.md'),
    tags: data.tags || [],
    url,
    content: body.replace(/\n/g, ' ').replace(/\s+/g, ' ').slice(0, 5000) // limit for performance
  };
});

fs.writeFileSync(OUTPUT, JSON.stringify(docs, null, 2));
console.log(`Search index generated: ${OUTPUT}`);
