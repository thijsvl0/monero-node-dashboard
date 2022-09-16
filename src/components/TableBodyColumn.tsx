import type { FC, ReactNode } from 'react';

interface TableBodyColumnProps {
  children: ReactNode;
}

const TableBodyColumn: FC<TableBodyColumnProps> = ({ children }) => {
  return <td className="hidden py-3.5 px-4 text-sm text-slate-500 dark:text-slate-400 sm:table-cell">{children}</td>;
};
export default TableBodyColumn;
