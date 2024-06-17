import { cn } from '@/utils/cn';

export default function Section({
  className,
  ...other
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...other}
      data-section
      className={cn('md:scroll-mt-30 scroll-mt-20 lg:scroll-mt-40', className)}
    />
  );
}
