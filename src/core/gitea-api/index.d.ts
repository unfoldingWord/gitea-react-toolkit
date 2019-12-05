import { APIConfig } from './core.d';

export interface AuthObject {
  user: object | null | undefined;
  token: string;
  config: APIConfig;
}

export interface AuthToken {
  sha1: string;
  id: string;
  name: string;
}

export interface AuthConfigObject {
  headers: object;
}