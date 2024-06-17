'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArticlesField } from '@/app/lib/definition';
import Section from '@/components/Section/Section';

const DeleteArticle = dynamic(() => import('./DeleteArticle/DeleteArticle'), {
  ssr: true,
});

interface Props {
  articles: ArticlesField[];
}

function BlogSection({ articles }: Props) {
  return (
    <Section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <Link href="/article/create" className="uppercase">
        Create article
      </Link>
      {articles.map((article, index) => (
        <div key={article.title} className="flex items-center gap-6">
          <Link href={`/article/${article.id}`}>
            <p className="typography-title-3 ">
              {index + 1}. {article.title}
            </p>
          </Link>
          <Link href={`/article/${article.id}/edit`}>Edit</Link>
          <DeleteArticle id={article.id} />
        </div>
      ))}
    </Section>
  );
}

export default BlogSection;
