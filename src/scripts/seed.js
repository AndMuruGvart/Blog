const { db } = require('@vercel/postgres');
const { articles } = require('../app/lib/placeholder-data');

async function seedArticles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "articles" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS articles (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      text VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "articles" table`);

    // Insert data into the "articles" table
    const insertedArticles = await Promise.all(
      articles.map(
        (article) => client.sql`
        INSERT INTO articles (id, title, text)
        VALUES (${article.id}, ${article.title}, ${article.text})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedArticles.length} articles`);

    return {
      createTable,
      articles: insertedArticles,
    };
  } catch (error) {
    console.error('Error seeding articles:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedArticles(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
