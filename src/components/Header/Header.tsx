interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => (
  <header className="mb-12 flex w-full justify-between gap-4 p-6 pl-8 font-body text-base font-normal md:pl-20 md:pt-12 lg:pl-40 lg:pr-12 xl:text-lg">
    {children}
  </header>
);
