import type { FC } from 'react';
import useMoneroStore from '../stores/monero';
import Card from './Card';

interface MoneroInfoCardProps {}

const MoneroInfoCard: FC<MoneroInfoCardProps> = () => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-md font-medium text-slate-800 dark:text-white">Monero info</h2>
      </div>
      <Card>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">Difficulty</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.difficulty}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">Height</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.height}</span>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <span className="font-semibold text-slate-700 dark:text-white">Target Height</span> <span className="pl-1 text-slate-500 dark:text-slate-400">{info?.result?.target_height}</span>
        </div>
      </Card>
    </div>
  );
};
export default MoneroInfoCard;
