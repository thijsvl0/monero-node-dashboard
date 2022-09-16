import type { FC, ReactNode } from 'react';

interface CardTitleProps {
  children: ReactNode;
}

const CardTitle: FC<CardTitleProps> = ({ children }) => {
  return (
    <div className="pb-4">
      <h2 className="text-md font-medium text-slate-800 dark:text-white">{children}</h2>
    </div>
  );
};
export default CardTitle;
