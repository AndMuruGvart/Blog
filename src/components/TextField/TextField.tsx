import {
  Input,
  InputProps,
  Label,
  TextField as AriaTextField,
} from 'react-aria-components';

import { cva } from '@/utils/cn';

interface Props extends InputProps {
  label?: string;
  className?: string;
  placeholder?: string;
}

const input = cva(
  'typography-title-4 rounded-none bg-transparent text-jordy-blue outline-none placeholder:text-dark-liver',
  {
    variants: {
      isFocusVisible: {
        true: 'outline outline-2 outline-offset-2 outline-jordy-blue',
      },
    },
  },
);

const label = cva('typography-body self-start text-anti-flash-white');

const textField = cva('flex flex-col gap-2');

export const variants = {
  input,
  label,
  textField,
};

export default function TextField({
  // eslint-disable-next-line @typescript-eslint/no-shadow
  label,
  placeholder,
  className,
  defaultValue,
  ...other
}: Props) {
  return (
    <AriaTextField className={variants.textField({ className })}>
      <Label className={variants.label()}>{label}</Label>
      <Input
        {...other}
        defaultValue={defaultValue}
        // placeholder={`${placeholder} ..`}
        className={variants.input}
      />
    </AriaTextField>
  );
}
