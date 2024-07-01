/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { authenticate } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoginFieldValues, loginFormSchema } from './LoginFormSchema';

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  const {
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginFieldValues>({
    mode: 'onChange',

    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form action={dispatch} className="space-y-3">
      <div className="bg-gray-50 max-w-[500px] flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className=" mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <Label
              className="text-gray-900 mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="border-gray-200 placeholder:text-gray-500 peer block w-full rounded-md border py-[9px] pl-10 text-jordy-blue outline-2"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              )}
            />
            <ErrorMessage errors={errors} name="email" />
          </div>
          <div className="mt-4">
            <Label
              className="text-gray-900 mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="border-gray-200 placeholder:text-gray-500 peer block w-full rounded-md border py-[9px] pl-10 text-jordy-blue outline-2"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required
                />
              )}
            />
            <ErrorMessage errors={errors} name="password" />
          </div>
        </div>
        <Button
          type="submit"
          disabled={!isDirty || !isValid}
          className="mt-4 w-full"
          aria-disabled={pending}
        >
          Log in
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
    </form>
  );
};
