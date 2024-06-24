interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <header className="fixed top-0 z-20 mb-12 flex w-full justify-between gap-4 overflow-hidden bg-black/70 p-6 pl-8 font-body text-base font-normal backdrop-blur-lg md:pl-20 md:pt-12 lg:pl-40 lg:pr-12 xl:text-lg">
      {children}
    </header>
  );
}
