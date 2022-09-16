import type { FC } from 'react';
import Link from 'next/link';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="py-2 text-center text-sm text-slate-300 dark:text-slate-500">
        <Link href={'https://github.com/brechtdoran/monero-node-dashboard'}>
          <a target={'_blank'}>brechtdoran/monero-node-dashboard</a>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
