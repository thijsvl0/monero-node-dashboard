import type { FC, ReactNode } from 'react';

import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
