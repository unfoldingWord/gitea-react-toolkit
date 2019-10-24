import Path from 'path';

import {apiPath,  get, post } from '../core';
import { encodeAuthentication } from '../authentication';

export const getTokens = async ({username, password, config}) => {
  let tokens;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': authentication,
  };
  try {
    tokens = await get({url, config: {...config, headers}});
  } catch { tokens = null; }
  return tokens;
};

export const createToken = async ({username, password, config={}}) => {
  let token;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authentication,
  };
  const payload = {"name": config.tokenid};
  try {
    token = await post({url, payload, config: {...config, headers}});
  } catch { token = []; }
  return token;
};
