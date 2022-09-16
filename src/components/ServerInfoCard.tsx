import Card from './Card';
import CardRow from './CardRow';
import CardTitle from './CardTitle';
import type { FC } from 'react';
import { formatBytes } from '../utils';
import useMoneroStore from '../stores/monero';

interface ServerInfoCardProps {}

const ServerInfoCard: FC<ServerInfoCardProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <CardTitle>Server info</CardTitle>
      <Card>
        <CardRow label="Version">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.version}</CardRow>
        <CardRow label="Net-type">{info?.result?.nettype}</CardRow>
        <CardRow label="Update Available">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.update_available ? 'Yes' : 'No'}</CardRow>
        <CardRow label="Syncing" className="pb-3">
          {info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : info?.result?.busy_syncing ? 'Yes' : 'No'}
        </CardRow>
        <CardRow label="Database Size">{formatBytes(info?.result?.database_size ?? 0)}</CardRow>
        <CardRow label="Free Space">{info?.result?.restricted ? <span className="text-slate-300 dark:text-slate-500">Restricted</span> : formatBytes(info?.result?.free_space ?? 0)}</CardRow>
      </Card>
    </div>
  );
};
export default ServerInfoCard;
