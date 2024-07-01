import { notFound } from 'next/navigation';
import { fetchArticleById } from '@/app/lib/data';
import SectionList from '@/components/SectionList/SectionList';
import { EditForm } from './_components/EditForm';

async function EditArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = await fetchArticleById(id);
  if (!article) {
    notFound();
  }
  return (
    <SectionList>
      <EditForm article={article} />
    </SectionList>
  );
}

export default EditArticlePage;
