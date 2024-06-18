import { cva as baseCva, cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const cn: typeof cx = (...inputs) => twMerge(cx(inputs));

export const cva: typeof baseCva = (...args) => {
  const component = baseCva(...args);

  const enhancedComponent: typeof component = (props) =>
    twMerge(component(props));

  return enhancedComponent;
};
