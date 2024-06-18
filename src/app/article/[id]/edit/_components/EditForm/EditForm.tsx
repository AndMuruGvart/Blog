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
        <textarea
          id="title"
          name="title"
          defaultValue={article.title}
          className="typography-title-3"
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => <p key={error}>{error}</p>)}
        <textarea
          id="text"
          name="text"
          defaultValue={article.text}
          className="typography-title-3"
        />
        {state.errors?.text &&
          state.errors.text.map((error: string) => <p key={error}>{error}</p>)}
        <Submit className="max-w-[200px]">Submit form</Submit>
      </form>
    </Section>
  );
}

export default EditForm;
