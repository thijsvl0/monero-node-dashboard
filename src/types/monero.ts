interface BaseResponce<T = undefined> {
  id: string;
  jsonrpc: string;
  result?: T;
  error?: ErrorMessageResponce;
}

export interface ResultResponce<T> extends BaseResponce<T> {
  result: T;
}

export interface ErrorResponce extends BaseResponce {
  error: ErrorMessageResponce;
}

export interface ErrorMessageResponce {
  code: number;
  message: string;
}

export interface GetInfoResponse {
  adjusted_time: number;
  alt_blocks_count: number;
  block_size_limit: number;
  block_size_median: number;
  block_weight_limit: number;
  block_weight_median: number;
  bootstrap_daemon_address: string;
  busy_syncing: boolean;
  credits: number;
  cumulative_difficulty: number;
  cumulative_difficulty_top64: number;
  database_size: number;
  difficulty: number;
  difficulty_top64: number;
  free_space: number;
  grey_peerlist_size: number;
  height: number;
  height_without_bootstrap: number;
  incoming_connections_count: number;
  mainnet: boolean;
  nettype: string;
  offline: boolean;
  outgoing_connections_count: number;
  restricted: boolean;
  rpc_connections_count: number;
  stagenet: boolean;
  start_time: number;
  status: string;
  synchronized: boolean;
  target: number;
  target_height: number;
  testnet: boolean;
  top_block_hash: string;
  top_hash: string;
  tx_count: number;
  tx_pool_size: number;
  untrusted: boolean;
  update_available: boolean;
  version: string;
  was_bootstrap_ever_used: boolean;
  white_peerlist_size: number;
  wide_cumulative_difficulty: string;
  wide_difficulty: string;
}

export interface GetConnectionsResponse {
  connections: GetConnectionsConnection[];
  status: string;
  untrusted: boolean;
}

export interface GetConnectionsConnection {
  address: string;
  address_type: number;
  avg_download: number;
  avg_upload: number;
  connection_id: string;
  current_download: number;
  current_upload: number;
  height: number;
  host: string;
  incoming: boolean;
  ip: string;
  live_time: number;
  local_ip: boolean;
  localhost: boolean;
  peer_id: string;
  port: string;
  pruning_seed: number;
  recv_count: number;
  recv_idle_time: number;
  rpc_credits_per_hash: number;
  rpc_port: number;
  send_count: number;
  send_idle_time: number;
  state: string;
  support_flags: number;
}
