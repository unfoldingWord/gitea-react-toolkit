import base64 from 'base-64';
import utf8 from 'utf8';
import { AuthObject, AuthToken } from './index.d';
import { getUser, ensureToken } from './users';
import { APIConfig } from './http/http.d';
import { ExtendConfig } from '..';

interface EncodeAuthentication {
  (args: { username: string; password: string; token?: AuthToken | string }): string;
  (args: { username?: string; password?: string; token: AuthToken | string }): string;
}

export const encodeAuthentication: EncodeAuthentication = ({
  username, password, token,
}) => {
  let authentication = '';

  if (token) {
    const sha1 = typeof token === 'object' ? token.sha1 : token;
    authentication = `token ${sha1}`;
  } else if (username && password) {
    const encoded = base64.encode(utf8.encode(`${username}:${password}`));
    authentication = 'Basic ' + encoded;
  }
  return authentication;
};

interface AuthorizationHeadersObject {
  'Content-Type': string;
  Authorization: string;
}

interface AuthorizationHeaders {
  (args: { username: string; password: string; token?: string | AuthToken }): AuthorizationHeadersObject;
  (args: { username?: string; password?: string; token: string | AuthToken }): AuthorizationHeadersObject;
}

export const authorizationHeaders: AuthorizationHeaders = ({
  username, password, token,
}) => {
  let headers: AuthorizationHeadersObject = {
    'Content-Type': '',
    'Authorization': '',
  };
  const authorization = encodeAuthentication({
    username, password, token,
  });

  if (authorization) {
    headers = {
      'Content-Type': 'application/json',
      'Authorization': authorization,
    };
  }
  return headers;
};

interface Authenticate {
  (args: { username: string; password: string; config: APIConfig | ExtendConfig }): Promise<AuthObject>;
};

export const authenticate: Authenticate = async ({
  username, password, config,
}) => {
  let token, user;
  let _config = { ...config, headers: {} };

  if (username && password) {
    let authHeaders = authorizationHeaders({ username, password });
    _config = { ...config, headers: { ...config.headers, ...authHeaders } };
    user = await getUser({ username, config: _config });
    token = await ensureToken({ username, config: _config });
    authHeaders = authorizationHeaders({ token });
    _config = { ...config, headers: { ...config.headers, ...authHeaders } };
  }

  const authentication = {
    user, token, config: _config,
  };
  return authentication;
};