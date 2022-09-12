declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONERO_HOST: string;
      MONERO_PORT: number;
    }
  }
}

export {};
