import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { BOOKS_URL, getPosts } from '../lib/posts';

// Full-text index for the search on /blog/. Built with the site, so it never goes stale.
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const books = await getCollection('books');

  const docs = [
    ...posts.map((p) => ({
      t: p.subtitle ? `${p.title} — ${p.subtitle}` : p.title,
      u: p.url,
      y: p.year,
      x: p.text,
    })),
    {
      t: 'Books read',
      u: BOOKS_URL,
      y: 'Timeless',
      x: books
        .map(({ data }) => `${data.title} by ${data.author}.${data.note ? ` ${data.note}` : ''}`)
        .join(' '),
    },
  ];

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
