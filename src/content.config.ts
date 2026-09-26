import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Posts stay in their year folders at the repo root (blog/2026/…).
// The id is the path without `.md`, so it doubles as the URL: /blog/<id>.
const blog = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!README.md', '!timeless/books_read.md'],
    base: './blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
});

const books = defineCollection({
  loader: file('_data/books.yml'),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.enum(['Cosmos', 'Society', 'Human', 'Micro']),
    note: z.string().optional(),
    filename: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { blog, books };
