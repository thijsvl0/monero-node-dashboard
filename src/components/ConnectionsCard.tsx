import { FC } from 'react';
import {} from '../types/monero';
import ConnectionsTable from './ConnectionsTable';

interface ConnectionsCardProps {}

const ConnectionsCard: FC<ConnectionsCardProps> = () => {
  return (
    <div className="col-span-full">
      <div className="pb-4">
        <h2 className="text-md font-medium text-slate-800">Active connections</h2>
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
        <ConnectionsTable />
      </div>
    </div>
  );
};
export default ConnectionsCard;
