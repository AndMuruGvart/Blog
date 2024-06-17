import { ArticlesField } from '@/app/lib/definition';
import Section from '@/components/Section/Section';

interface Props {
  article: ArticlesField;
}

function ArticleSection({ article }: Props) {
  return (
    <Section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <h1 className="typography-title-3 ">{article.title}</h1>
      <p className="typography">{article.text}</p>
    </Section>
  );
}

export default ArticleSection;
