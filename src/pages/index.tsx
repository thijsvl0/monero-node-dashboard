import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ConnectionsCard from '../components/ConnectionsCard';
import ServerInfoCard from '../components/ServerInfoCard';
import ConnectionInfoCard from '../components/ConnectionInfoCard';
import MoneroInfoCard from '../components/MoneroInfoCard';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monero Node Dashboard</title>
      </Head>
      <Layout>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServerInfoCard />
            <ConnectionInfoCard />
            <MoneroInfoCard />
            <ConnectionsCard />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
