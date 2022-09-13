import type { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="rounded-lg bg-white px-6 py-6 pb-8 shadow-md dark:bg-gray-900">{children}</div>;
};
export default Card;
