import { APIConfig } from './http/http.d';

export interface AuthenticateOptions {
  username: string;
  password: string;
  token?: string | {
    sha1: string;
  };
  config: APIConfig;
}

export interface Authenticate {
  user?: object;
}

export interface AuthenticationToken {
  name: string;
}