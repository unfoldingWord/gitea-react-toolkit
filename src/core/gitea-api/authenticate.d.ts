export interface AuthenticateOptions {
  username: string;
  password: string;
  token?: string | {
    sha1: string;
  };
  config: {
    headers: object;
  }
}

export interface Authenticate {
  user?: object;
}

export interface AuthenticationToken {
  name: string;
}