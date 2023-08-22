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
          'border-neutral-7 hover:border-neutral-8 bg-neutral-3 hover:bg-neutral-4 focus-within:bg-neutral-5 placeholder:text-neutral-11 text-neutral-12 focus:border-primary-11 flex h-12 w-full rounded-lg border-2 px-3 py-1 text-lg shadow-sm transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
