import CardTitle from './CardTitle';
import ConnectionsTable from './ConnectionsTable';
import { FC } from 'react';

interface ConnectionsCardProps {}

const ConnectionsCard: FC<ConnectionsCardProps> = () => {
  return (
    <div className="col-span-full">
      <CardTitle>Active connections</CardTitle>
      <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
        <ConnectionsTable />
      </div>
    </div>
  );
};
export default ConnectionsCard;
