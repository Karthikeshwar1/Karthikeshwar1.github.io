import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';
import { rehypeLocalLinks, rehypePostTitle, rehypeReadingView } from './src/lib/markdown.mjs';

export default defineConfig({
  output: 'static',
  // `preserve` keeps the Jekyll-era URLs exactly: blog/2026/ai-manifesto.md → /blog/2026/ai-manifesto
  build: { format: 'preserve' },
  site: 'https://karthikeshwar1.github.io',
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypeRaw, rehypePostTitle, rehypeLocalLinks, rehypeReadingView],
  },
});
