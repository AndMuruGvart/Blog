import 'client-only';

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { cva } from '@/utils/cn';

export interface ButtonProps extends Omit<AriaButtonProps, 'style'> {
  children: React.ReactNode;
}

const button = cva(
  'typography-body relative inline-flex touch-none select-none overflow-hidden border border-anti-flash-white bg-black px-9 py-3 outline-none transition-colors motion-reduce:transition-none md:py-4',
  {
    variants: {
      isHovered: {
        true: 'bg-anti-flash-white text-black',
      },
      isFocusVisible: {
        true: 'bg-anti-flash-white text-black outline outline-2 outline-offset-2 outline-jordy-blue',
      },
      isPressed: {
        true: 'bg-anti-flash-white text-black',
      },
      isDisabled: {
        true: 'border-dark-liver text-dark-liver',
      },
    },
  },
);

export function Button({ className, children, ...other }: ButtonProps) {
  return (
    <AriaButton
      {...other}
      className={(values) => button({ ...values, className })}
    >
      {children}
    </AriaButton>
  );
}
