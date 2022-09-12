import Image from 'next/image';
import type { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={'/images/monero-logo.png'} height={50} width={50} alt="Monero Logo" />
      <h1 className="font-display text-2xl">
        <span className="text-secondary">Monero</span> <span className="text-primary">Node Dashboard</span>
      </h1>
    </div>
  );
};
export default Logo;
