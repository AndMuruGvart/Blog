'use client';

import { useFormState } from 'react-dom';
import Section from '@/components/Section/Section';
import { State, createArticle } from '@/app/lib/actions';
import Submit from '@/components/Submit/Submit';

function CreateForm() {
  const initialState: State = {};
  const [state, formAction] = useFormState(createArticle, initialState);

  return (
    <Section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <form className="grid gap-6" action={formAction}>
        <textarea
          id="title"
          name="title"
          placeholder="Title"
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => <p key={error}>{error}</p>)}
        <textarea
          id="text"
          name="text"
          placeholder="Text"
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.text &&
          state.errors.text.map((error: string) => <p key={error}>{error}</p>)}
        <Submit className="max-w-[200px]">Create Article</Submit>
      </form>
    </Section>
  );
}

export default CreateForm;
