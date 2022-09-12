import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-4 sm:px-8">{children}</div>;
};
export default Container;
