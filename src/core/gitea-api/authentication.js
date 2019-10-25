import base64 from 'base-64';
import utf8 from 'utf8';

import { getUser, ensureToken } from './users';

export const authenticate = async ({username, password, config}) => {
  let token, user;
  if (username && password) {
    const authorization = encodeAuthentication({username, password});
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': authorization,
      ...config.headers
    };
    const _config = {...config, headers};
    user = await getUser({username, config: _config});
    token = await ensureToken({username, config: _config});
  }
  const authentication = {user, token, config};
  return authentication;
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
