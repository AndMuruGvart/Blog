import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { ArticlesField } from './definition';

export default async function fetchArticles() {
  noStore();
  try {
    const data = await sql<ArticlesField>`
        SELECT
          id,
          title,
          text
        FROM articles
      `;

    const articles = data.rows;
    return articles;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all articles.');
  }
}

export async function fetchArticleById(id: string) {
  noStore();
  try {
    const data = await sql<ArticlesField>`
      SELECT
        articles.id,
        articles.title,
        articles.text
      FROM articles
      WHERE articles.id = ${id};
    `;

    const article = data.rows;
    return article[0];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch article by id.');
  }
}
