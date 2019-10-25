import base64 from 'base-64';
import utf8 from 'utf8';

import { getUser, ensureToken } from './users';

export const authenticate = async ({username, password, config}) => {
  let token, user;
  let _config = {...config};
  if (username && password) {
    const headers = authorizationHeaders({username, password});
    _config = {...config, headers: {...config.headers, ...headers}};
    user = await getUser({username, config: _config});
    token = await ensureToken({username, config: _config});
  }
  const authentication = {user, token, config: _config};
  return authentication;
};

export const authorizationHeaders = ({username, password, token}) => {
  let headers = {};
  const authorization = encodeAuthentication({username, password, token});
  if (authorization) {
    headers = {
      'Content-Type': 'application/json',
      'Authorization': authorization,
    };
  }
  return headers;
};

export const encodeAuthentication = ({username, password, token}) => {
  let authentication;
  if (token) {
    let sha1 = typeof token === 'object' ? token.sha1 : token;
    authentication = `token ${sha1}`;
  } else if (username && password) {
    const encoded = base64.encode(utf8.encode(`${username}:${password}`));
    authentication = 'Basic ' + encoded;
  }
  return authentication;
};
