import { ArticlesField } from '@/app/lib/definition';

interface Props {
  article: ArticlesField;
}

export const ArticleSection = ({ article }: Props) => (
  <section className="container grid gap-12">
    <h1 className="typography-title-3 ">{article.title}</h1>
    <p className="typography">{article.text}</p>
  </section>
);
