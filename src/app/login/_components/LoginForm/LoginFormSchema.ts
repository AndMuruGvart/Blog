import { z } from 'zod';
import { endsWithWhiteSpaces, startsWithWhiteSpaces } from '@/utils/spaces';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'Must contain at least 6 characters')
    .max(40, 'Password is too long (maximum is 40 characters)')
    .refine(
      (value) => !startsWithWhiteSpaces(value) && !endsWithWhiteSpaces(value),
      {
        message: 'Password starts or ends with spaces',
      },
    ),
});

export type LoginFieldValues = z.infer<typeof loginFormSchema>;
