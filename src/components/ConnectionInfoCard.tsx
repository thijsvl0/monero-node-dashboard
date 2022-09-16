import Card from './Card';
import CardRow from './CardRow';
import CardTitle from './CardTitle';
import { FC } from 'react';
import useMoneroStore from '../stores/monero';

interface ConnectionInfoCardProps {}

const ConnectionInfoCard: FC<ConnectionInfoCardProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <CardTitle>Connection info</CardTitle>
      <Card>
        <CardRow label="Incoming">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.incoming_connections_count}</CardRow>
        <CardRow label="Outgoing">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.outgoing_connections_count}</CardRow>
        <CardRow label="RPC">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.rpc_connections_count}</CardRow>
      </Card>
    </div>
  );
};
export default ConnectionInfoCard;
