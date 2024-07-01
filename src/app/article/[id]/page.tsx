import { notFound } from 'next/navigation';
import { fetchArticleById } from '@/app/lib/data';
import SectionList from '@/components/SectionList/SectionList';
import { ArticleSection } from '../_components/ArticleSection';

async function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = await fetchArticleById(id);
  if (!article) {
    notFound();
  }
  return (
    <SectionList>
      <ArticleSection article={article} />
    </SectionList>
  );
}

export default ArticlePage;
