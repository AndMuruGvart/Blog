import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '../Button/Button';

type Props = Omit<ButtonProps, 'type'>;

export default function Submit({ isDisabled, ...other }: Props) {
  const { pending } = useFormStatus();

  return <Button {...other} type="submit" isDisabled={isDisabled || pending} />;
}
