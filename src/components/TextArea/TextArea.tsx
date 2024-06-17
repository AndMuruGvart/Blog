import { useState } from 'react';
import {
  Label,
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
  TextField,
} from 'react-aria-components';
import { variants } from '../TextField';

interface Props extends AriaTextAreaProps {
  label?: string;
  className?: string;
  placeholder?: string;
}

export default function TextArea({
  label,
  placeholder,
  className,
  onChange,
  defaultValue,
  ...other
}: Props) {
  const [value, setValue] = useState('');

  return (
    <TextField className={variants.textField({ className })}>
      <Label className={variants.label()}>{label}</Label>

      <div className="grid grid-cols-1">
        <AriaTextArea
          {...other}
          defaultValue={defaultValue}
          placeholder={`${placeholder} ..`}
          className={(val) =>
            variants.input({
              ...val,
              className: 'grid-item-top-left resize-none overflow-hidden',
            })
          }
          onChange={(event) => {
            // We add a space to the end of the value to fix auto-resize
            setValue(`${event.target.value} `);
            onChange?.(event);
          }}
        />

        {/* For support auto-resize. We use value and placeholder to calculate the min height */}
        <div
          className={variants.input({
            className:
              'grid-item-top-left invisible whitespace-pre-wrap break-words',
          })}
        >
          {value}
        </div>
        <div
          className={variants.input({
            className:
              'grid-item-top-left invisible whitespace-pre-wrap break-words',
          })}
        >
          {placeholder} ..
        </div>
      </div>
    </TextField>
  );
}
