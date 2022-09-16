import Container from './Container';
import type { FC } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import useMoneroStore from '../stores/monero';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <nav className="border-t-8 border-primary bg-white shadow dark:bg-gray-900">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-4">
            {isLoading ? <div className="text-slate-400 dark:text-slate-300">Connecting...</div> : info ? <div className="font-semibold text-primary">Connected</div> : <div className="text-slate-300 dark:text-slate-500">Not Connected</div>} <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
