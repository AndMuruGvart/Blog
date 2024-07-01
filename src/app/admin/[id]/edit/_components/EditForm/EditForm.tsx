'use client';

import { useFormState } from 'react-dom';
import { ArticlesField } from '@/app/lib/definition';
import { State, updateArticle } from '@/app/lib/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface Props {
  article: ArticlesField;
}

export const EditForm = ({ article }: Props) => {
  const initialState: State = {};
  const updateArticleWithId = updateArticle.bind(null, article.id);
  const [state, formAction] = useFormState(updateArticleWithId, initialState);

  return (
    <section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <form className="grid gap-6" action={formAction}>
        <p>Title</p>
        <Textarea
          id="title"
          name="title"
          defaultValue={article.title}
          className="typography-title-4 rounded-none bg-transparent outline-none"
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => <p key={error}>{error}</p>)}
        <p>Text</p>
        <Textarea
          id="text"
          name="text"
          defaultValue={article.text}
          className="typography-title-4 rounded-none bg-transparent outline-none"
        />
        {state.errors?.text &&
          state.errors.text.map((error: string) => <p key={error}>{error}</p>)}
        <Button className="max-w-[280px]">Submit changes in article</Button>
      </form>
    </section>
  );
};
