'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { LogOutState, Logout } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';

const LogOutButton = () => {
  const { pending } = useFormStatus();
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/')}
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
  const [state, dispatch] = useFormState(Logout, initialState);
  return (
    <form action={dispatch}>
      <LogOutButton />
      {state?.message && <p>{state?.message}</p>}
    </form>
  );
};
