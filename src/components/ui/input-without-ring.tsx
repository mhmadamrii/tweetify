import * as React from 'react';

import { cn } from '~/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputWithoutRing = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn('w-full focus:outline-none', className)}
      ref={ref}
      {...props}
    />
  );
});

InputWithoutRing.displayName = 'Input';

export { InputWithoutRing };
