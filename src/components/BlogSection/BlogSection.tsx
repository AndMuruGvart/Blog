'use client';

import Link from 'next/link';
import { ArticlesField } from '@/app/lib/definition';
import { LogOutForm } from '@/app/login/_components/LoginForm';
import { DeleteArticle } from './DeleteArticle';
import { Header } from '../Header';

interface Props {
  articles: ArticlesField[];
  isAdmin?: boolean;
}

export const BlogSection = ({ articles, isAdmin = false }: Props) => (
  <section className="container grid gap-12">
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
  </section>
);
