import type { FC } from 'react';
import Image from 'next/image';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={'/images/monero-logo.png'} height={50} width={50} alt="Monero Logo" />
      <h1 className="text-md font-display sm:text-2xl">
        <span className="text-secondary">Monero</span> <span className="text-primary">Node Dashboard</span>
      </h1>
    </div>
  );
};
export default Logo;
