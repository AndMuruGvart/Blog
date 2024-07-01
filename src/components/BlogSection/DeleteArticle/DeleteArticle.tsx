import deleteArticle from '@/app/lib/actions';
import { Button } from '@/components/ui/button';

export const DeleteArticle = async ({ id }: { id: string }) => {
  const deleteArticleWithId = deleteArticle.bind(null, id);

  return (
    <form action={deleteArticleWithId}>
      <Button variant="destructive">Delete</Button>
    </form>
  );
};
