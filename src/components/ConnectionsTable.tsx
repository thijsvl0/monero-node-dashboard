import { ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { FC, useEffect, useMemo, useState } from 'react';

import { GetConnectionsConnection } from '../types/monero';
import TableBody from './TableBody';
import TableBodyColumn from './TableBodyColumn';
import { formatBytes } from '../utils';
import useMoneroStore from '../stores/monero';

interface ConnectionsTableProps {}

const ConnectionsTable: FC<ConnectionsTableProps> = () => {
  const { data: connections, isLoading } = useMoneroStore((state) => state.connections);

  const [sortedConnections, setSortedConnections] = useState<GetConnectionsConnection[]>([]);
  const [sortConfig, setSortConfig] = useState<{ column: keyof GetConnectionsConnection; order: 'asc' | 'desc' }>({ column: 'send_count', order: 'desc' });

  useMemo(() => {
    return sortedConnections.sort((a, b) => ((sortConfig.order == 'desc' ? a[sortConfig.column] > b[sortConfig.column] : a[sortConfig.column] < b[sortConfig.column]) ? -1 : 1));
  }, [sortConfig, sortedConnections]);

  useEffect(() => {
    if (connections?.result) setSortedConnections(connections.result.connections);
  }, [connections]);

  const sortConnections = (column: keyof GetConnectionsConnection) => {
    setSortConfig((_sortConfig) => ({ column, order: _sortConfig.column === column ? (_sortConfig.order == 'asc' ? 'desc' : 'asc') : 'desc' }));
  };

  const getOrderIcon = (column: keyof GetConnectionsConnection) => {
    return column == sortConfig.column && (sortConfig.order == 'desc' ? <ChevronDownIcon className="ml-1 inline w-4" /> : <ChevronUpIcon className="ml-1 inline w-4" />);
  };

  return (
    <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-500">
      <thead className="bg-slate-50 dark:bg-gray-900">
        <tr>
          <th className="select-none py-3.5 px-4 pl-6 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white" onClick={() => sortConnections('ip')}>
            Address
            {getOrderIcon('ip')}
          </th>
          <th className="hidden select-none py-3.5 px-4 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white sm:table-cell" onClick={() => sortConnections('incoming')}>
            Direction
            {getOrderIcon('incoming')}
          </th>
          <th className="hidden select-none py-3.5 px-4 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white md:table-cell" onClick={() => sortConnections('current_upload')}>
            Upload
            {getOrderIcon('current_upload')}
          </th>
          <th className="hidden select-none py-3.5 px-4 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white md:table-cell" onClick={() => sortConnections('current_download')}>
            Download
            {getOrderIcon('current_download')}
          </th>
          <th className="hidden select-none py-3.5 px-4 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white md:table-cell" onClick={() => sortConnections('send_count')}>
            Sent
            {getOrderIcon('send_count')}
          </th>
          <th className="hidden select-none py-3.5 px-4 text-left text-sm font-medium text-slate-700 hover:cursor-pointer dark:text-white md:table-cell" onClick={() => sortConnections('recv_count')}>
            Received
            {getOrderIcon('recv_count')}
          </th>
        </tr>
      </thead>
      <TableBody>
        {sortedConnections &&
          sortedConnections.map((connection) => (
            <tr key={connection.host}>
              <td className="py-3.5 px-4 pl-6 text-sm font-medium text-primary">
                <a className="relative hover:underline" href={`https://bgp.he.net/ip/${connection.ip}`} target="_blank" rel="noreferrer">
                  {connection.address}
                  <ArrowTopRightOnSquareIcon className="absolute -right-4 -top-1 w-3" />
                </a>
              </td>
              <TableBodyColumn>{connection.incoming ? 'Inboud' : 'Outbound'}</TableBodyColumn>
              <TableBodyColumn>{formatBytes(connection.current_upload)}/s</TableBodyColumn>
              <TableBodyColumn>{formatBytes(connection.current_download)}/s</TableBodyColumn>
              <TableBodyColumn>{formatBytes(connection.send_count)}</TableBodyColumn>
              <TableBodyColumn>{formatBytes(connection.recv_count)}</TableBodyColumn>
            </tr>
          ))}
      </TableBody>
    </table>
  );
};
export default ConnectionsTable;
