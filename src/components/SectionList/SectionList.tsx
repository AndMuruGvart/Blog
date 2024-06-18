import { cn } from '@/utils/cn';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function SectionList({ className, children }: Props) {
  return (
    <main className={cn('flex flex-col gap-30 md:gap-40 lg:gap-50', className)}>
      {children}
    </main>
  );
}
