import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-12/20">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-12/20" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="focus-visible:ring-ring block h-4 w-4 rounded-full bg-neutral-10 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
