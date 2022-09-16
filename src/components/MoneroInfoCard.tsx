import Card from './Card';
import CardRow from './CardRow';
import CardTitle from './CardTitle';
import type { FC } from 'react';
import useMoneroStore from '../stores/monero';

interface MoneroInfoCardProps {}

const MoneroInfoCard: FC<MoneroInfoCardProps> = () => {
  const { data: info, isLoading } = useMoneroStore((state) => state.info);

  return (
    <div>
      <CardTitle>Monero info</CardTitle>
      <Card>
        <CardRow label="Difficulty">{info?.result?.difficulty}</CardRow>
        <CardRow label="Height">{info?.result?.height}</CardRow>
        <CardRow label="Target Height">{info?.result?.target_height}</CardRow>
      </Card>
    </div>
  );
};
export default MoneroInfoCard;
