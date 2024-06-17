import { cn } from '@/utils/cn';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function SectionList({ className, children }: Props) {
  return (
    <main className={cn('gap-30 lg:gap-50 flex flex-col md:gap-40', className)}>
      {children}
    </main>
  );
}
