import { FC } from 'react';
import useMoneroStore from '../stores/monero';
import Card from './Card';

interface ConnectionInfoCardProps {}

const ConnectionInfoCard: FC<ConnectionInfoCardProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-md font-medium text-slate-800 dark:text-white">Connection info</h2>
      </div>
      <Card>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">Incoming</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.incoming_connections_count}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">Outgoing</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.outgoing_connections_count}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">RPC</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.rpc_connections_count}</span>
        </div>
      </Card>
    </div>
  );
};
export default ConnectionInfoCard;
