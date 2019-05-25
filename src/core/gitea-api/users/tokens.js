import Path from 'path';

import { get, post } from '../core';
import { encodeAuthentication } from '../authentication';

const apiPath = 'api/v1';

export const getTokens = async ({username, password, config}) => {
  let tokens;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  config.headers = {
      'Content-Type': 'application/json',
      'Authorization': authentication,
  };
  try {
    tokens = await get({url, config});
  } catch { tokens = null; }
  return tokens;
};

export const createToken = async ({username, password, config={}}) => {
  let token;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  config.headers = {
    'Content-Type': 'application/json',
    'Authorization': authentication,
  };
  const payload = {"name": config.tokenid};
  try {
    token = await post({url, payload, config});
  } catch { token = []; }
  return token;
};
