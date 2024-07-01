'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { LogOutState, logout } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';

const LogOutButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-4 flex items-start"
      aria-disabled={pending}
    >
      Log Out
    </Button>
  );
};

export const LogOutForm = () => {
  const initialState: LogOutState = {};
  const [state, dispatch] = useFormState(logout, initialState);
  return (
    <form action={dispatch}>
      <LogOutButton />
      {state?.message && <p>{state?.message}</p>}
    </form>
  );
};
