'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArticlesField } from '@/app/lib/definition';
import Section from '@/components/Section/Section';
import Header from '../Header/Header';
import LogOutForm from '@/app/login/_components/LoginForm/LogOutForm';

const DeleteArticle = dynamic(() => import('./DeleteArticle/DeleteArticle'), {
  ssr: true,
});

interface Props {
  articles: ArticlesField[];
  isAdmin?: boolean;
}

function BlogSection({ articles, isAdmin = false }: Props) {
  return (
    <Section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      {!isAdmin && (
        <Header>
          <Link href="/admin">Go to admin panel</Link>
        </Header>
      )}

      {isAdmin && (
        <>
          <LogOutForm />
          <Link href="/admin/create" className="uppercase">
            Create article
          </Link>
        </>
      )}

      {articles.map((article, index) => (
        <div key={article.title} className="flex items-center gap-6">
          <Link href={`/article/${article.id}`}>
            <p className="typography-title-3 ">
              {index + 1}. {article.title}
            </p>
          </Link>
          {isAdmin && (
            <>
              <Link href={`/admin/${article.id}/edit`}>Edit</Link>
              <DeleteArticle id={article.id} />
            </>
          )}
        </div>
      ))}
    </Section>
  );
}

export default BlogSection;
