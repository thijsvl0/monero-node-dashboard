import type { FC, ReactNode } from 'react';

interface TableBodyProps {
  children: ReactNode;
}

const TableBody: FC<TableBodyProps> = ({ children }) => {
  return <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-600 dark:bg-gray-900">{children}</tbody>;
};
export default TableBody;
