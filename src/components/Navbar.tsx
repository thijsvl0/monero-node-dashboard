import type { FC } from 'react';
import useMoneroStore from '../stores/monero';
import Container from './Container';
import Logo from './Logo';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <nav className="border-t-8 border-primary bg-white shadow">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          {isLoading ? <div className="text-slate-400">Connecting...</div> : info ? <div className="font-semibold text-primary">Connected</div> : <div className="text-slate-300">Not Connected</div>}
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
