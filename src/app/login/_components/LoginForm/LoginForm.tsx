/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@/components/Button/Button';

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="mt-4 w-full" aria-disabled={pending}>
      Log in
    </Button>
  );
}

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="bg-gray-50 max-w-[500px] flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className=" mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="text-gray-900 mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="border-gray-200 placeholder:text-gray-500 peer block w-full rounded-md border py-[9px] pl-10 text-jordy-blue outline-2"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="text-gray-900 mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="border-gray-200 placeholder:text-gray-500 peer block w-full rounded-md border py-[9px] pl-10 text-jordy-blue outline-2"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
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
}
