import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useMoneroStore from '../stores/monero';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  const { data: info, fetch: fetchInfo } = useMoneroStore((state) => state.info);
  const { data: connections, fetch: fetchConnections } = useMoneroStore((state) => state.connections);

  useEffect(() => {
    if (!info) fetchInfo();
    if (!connections && info?.result) fetchConnections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info, connections]);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
