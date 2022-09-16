import type { FC, ReactNode } from 'react';

import classNames from 'classnames';

interface CardRowProps {
  label: string;
  className?: string;
  children: ReactNode;
}

const CardRow: FC<CardRowProps> = ({ label, className, children }) => {
  return (
    <div className={classNames('grid grid-cols-2 text-sm', className)}>
      <span className="font-semibold text-slate-700 dark:text-white">{label}</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{children}</span>
    </div>
  );
};
export default CardRow;
