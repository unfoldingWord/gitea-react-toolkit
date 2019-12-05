import { AuthToken } from './index.d';

export interface APIConfig {
  server?: string;
  baseURL?: string;
  data?: object;
  tokenid?: string;
  headers?: object;
  token?: string;
}


export interface CoreOptions {
  url: string;
  params?: object;
  payload?: object;
  config?: APIConfig;
  noCache?: boolean;
}