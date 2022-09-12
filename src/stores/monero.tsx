import create from 'zustand';
import { MoneroApi } from '../libs/moneroApi';
import { ErrorResponce, GetConnectionsResponse, GetInfoResponse, ResultResponce } from '../types/monero';

interface MoneroState {
  client: MoneroApi;
  info: {
    isLoading: boolean;
    data: ResultResponce<GetInfoResponse> | ErrorResponce | null;
    fetch: () => void;
  };
  connections: {
    isLoading: boolean;
    data: ResultResponce<GetConnectionsResponse> | ErrorResponce | null;
    fetch: () => void;
  };
}

const useMoneroStore = create<MoneroState>((set, get) => ({
  client: new MoneroApi(),
  info: {
    isLoading: false,
    data: null,
    fetch: async () => {
      set((state) => ({ info: { ...state.info, isLoading: true } }));

      try {
        const data = await get().client.getInfo();

        set((state) => ({ info: { ...state.info, data } }));
      } catch (error) {}

      set((state) => ({ info: { ...state.info, isLoading: false } }));
    },
  },
  connections: {
    isLoading: false,
    data: null,
    fetch: async () => {
      set((state) => ({ connections: { ...state.connections, isLoading: true } }));

      try {
        const data = await get().client.getConnections();

        set((state) => ({ connections: { ...state.connections, data } }));
      } catch (error) {}

      set((state) => ({ connections: { ...state.connections, isLoading: false } }));
    },
  },
}));

export default useMoneroStore;
