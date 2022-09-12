import { ErrorResponce, GetConnectionsResponse } from './../types/monero';
import { GetInfoResponse, ResultResponce } from '../types/monero';

export class MoneroApi {
  private _send = (method: string): Promise<Response> => {
    return fetch(`/json_rpc`, { method: 'POST', body: JSON.stringify({ jsonrpc: '2.0', id: '0', method }) });
  };

  public getInfo = async (): Promise<ResultResponce<GetInfoResponse> | ErrorResponce> => {
    return new Promise<ResultResponce<GetInfoResponse> | ErrorResponce>(async (resolve, reject) => {
      const res = await this._send('get_info');

      return res.ok ? resolve(res.json()) : reject();
    });
  };

  public getConnections = async (): Promise<ResultResponce<GetConnectionsResponse> | ErrorResponce> => {
    return new Promise<ResultResponce<GetConnectionsResponse> | ErrorResponce>(async (resolve, reject) => {
      const res = await this._send('get_connections');

      return res.ok ? resolve(res.json()) : reject();
    });
  };
}
