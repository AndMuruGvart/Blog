'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    text?: string[];
    title?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  title: z.string(),
  text: z.string(),
});

// eslint-disable-next-line consistent-return
export async function updateArticle(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const rawFormData = Object.fromEntries(formData);

  const validatedFields = FormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Article.',
    };
  }

  const { title, text } = validatedFields.data;

  try {
    await sql`
      UPDATE articles
      SET title = ${title}, text = ${text}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Article.' };
  }

  revalidatePath(`/${id}/edit`);
  redirect(`/article/${id}`);
}

// eslint-disable-next-line consistent-return
export async function createArticle(prevState: State, formData: FormData) {
  const rawFormData = Object.fromEntries(formData);

  const validatedFields = FormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Article.',
    };
  }

  const { title, text } = validatedFields.data;

  try {
    await sql`
     INSERT INTO articles (title, text)
      VALUES (${title}, ${text})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Article.' };
  }

  revalidatePath(`/article/edit`);
  redirect('/');
}

export default async function deleteArticle(id: string) {
  try {
    await sql`DELETE FROM articles WHERE id = ${id}`;

    revalidatePath('/');

    return { message: 'Deleted Article' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Article.' };
  }
}
