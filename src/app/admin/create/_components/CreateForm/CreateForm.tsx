'use client';

import { useFormState } from 'react-dom';
import { State, createArticle } from '@/app/lib/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const CreateForm = () => {
  const initialState: State = {};
  const [state, formAction] = useFormState(createArticle, initialState);

  return (
    <section className="container mt-[240px] grid gap-12 md:mt-[320px]">
      <h1 className="typography-title-3">Create article</h1>
      <form className="grid gap-6" action={formAction}>
        <Textarea
          id="title"
          name="title"
          placeholder="Title"
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => <p key={error}>{error}</p>)}
        <Textarea
          id="text"
          name="text"
          placeholder="Text"
          className="typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none"
        />
        {state.errors?.text &&
          state.errors.text.map((error: string) => <p key={error}>{error}</p>)}
        <Button className="max-w-[200px]">Create Article</Button>
      </form>
    </section>
  );
};
