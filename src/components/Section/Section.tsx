import { cn } from '@/utils/cn';

export default function Section({
  className,
  ...other
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...other}
      data-section
      className={cn('scroll-mt-20 md:scroll-mt-30 lg:scroll-mt-40', className)}
    />
  );
}
