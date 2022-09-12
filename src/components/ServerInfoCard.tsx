import type { FC } from 'react';
import useMoneroStore from '../stores/monero';
import { formatBytes } from '../utils';
import Card from './Card';

interface ServerInfoCardProps {}

const ServerInfoCard: FC<ServerInfoCardProps> = ({}) => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-md font-medium text-slate-800">Server info</h2>
      </div>
      <Card>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700">Version</span> <span className="pl-1 text-slate-500">{info?.result?.restricted ? <span className="text-slate-300">Restricted</span> : info?.result?.version}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700">Net-type</span> <span className="pl-1 text-slate-500">{info?.result?.nettype}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700">Update Available</span> <span className="pl-1 text-slate-500">{info?.result?.restricted ? <span className="text-slate-300">Restricted</span> : info?.result?.update_available ? 'Yes' : 'No'}</span>
        </div>
        <div className="grid grid-cols-2 pb-3 text-sm">
          <span className="font-semibold text-slate-700">Syncing</span> <span className="pl-1 text-slate-500">{info?.result?.restricted ? <span className="text-slate-300">Restricted</span> : info?.result?.busy_syncing ? 'Yes' : 'No'}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700">Database Size</span> <span className="pl-1 text-slate-500">{formatBytes(info?.result?.database_size ?? 0)}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700">Free Space</span> <span className="pl-1 text-slate-500">{info?.result?.restricted ? <span className="text-slate-300">Restricted</span> : formatBytes(info?.result?.free_space ?? 0)}</span>
        </div>
      </Card>
    </div>
  );
};
export default ServerInfoCard;
