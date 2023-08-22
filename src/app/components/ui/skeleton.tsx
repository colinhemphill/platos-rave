import { twMerge } from 'tailwind-merge';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('bg-primary/10 animate-pulse rounded-lg', className)}
      {...props}
    />
  );
}

export { Skeleton };
