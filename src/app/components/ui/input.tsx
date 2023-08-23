import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          'flex h-12 w-full rounded-lg border-2 border-neutral-7 bg-neutral-3 px-3 py-1 text-lg text-neutral-12 shadow-sm transition-colors placeholder:text-neutral-11 focus-within:bg-neutral-5 hover:border-neutral-8 hover:bg-neutral-4 focus:border-primary-11 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
