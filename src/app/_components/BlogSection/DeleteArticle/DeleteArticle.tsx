import deleteArticle from '@/app/lib/actions';
import Submit from '@/components/Submit/Submit';

export default async function DeleteArticle({ id }: { id: string }) {
  const deleteArticleWithId = deleteArticle.bind(null, id);

  return (
    <form action={deleteArticleWithId}>
      <Submit>Delete</Submit>
    </form>
  );
}
