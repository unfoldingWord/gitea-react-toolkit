export interface APIConfig {
  server?: string;
  baseURL?: string;
  data?: object;
  tokenid: string;
}


export interface CoreOptions {
  url: string;
  params?: object;
  payload?: object;
  config?: APIConfig;
  noCache?: boolean;
}