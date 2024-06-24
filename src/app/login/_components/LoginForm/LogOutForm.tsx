import { useFormState, useFormStatus } from 'react-dom';
import { LogOutState, logout } from '@/app/lib/actions';

function LogOutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-4 flex w-full items-start"
      aria-disabled={pending}
    >
      Log Out
    </button>
  );
}

export default function LogOutForm() {
  const initialState: LogOutState = {};
  const [state, dispatch] = useFormState(logout, initialState);
  return (
    <form action={dispatch}>
      <LogOutButton />
      {state?.message && <p>{state?.message}</p>}
    </form>
  );
}
