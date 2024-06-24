'use client';

import { useFormState } from 'react-dom';
import { ArticlesField } from '@/app/lib/definition';
import Section from '@/components/Section/Section';
import { State, updateArticle } from '@/app/lib/actions';
import Submit from '@/components/Submit/Submit';

interface Props {
  article: ArticlesField;
}

function EditForm({ article }: Props) {
  const initialState: State = {};
  const updateArticleWithId = updateArticle.bind(null, article.id);
  const [state, formAction] = useFormState(updateArticleWithId, initialState);

  return (
    <Section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <form className="grid gap-6" action={formAction}>
        <p>Title</p>
        <textarea
          id="title"
          name="title"
          defaultValue={article.title}
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => <p key={error}>{error}</p>)}
        <p>Text</p>
        <textarea
          id="text"
          name="text"
          defaultValue={article.text}
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.text &&
          state.errors.text.map((error: string) => <p key={error}>{error}</p>)}
        <Submit className="max-w-[280px]">Submit changes in article</Submit>
      </form>
    </Section>
  );
}

export default EditForm;
