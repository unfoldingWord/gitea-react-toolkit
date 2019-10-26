import Path from 'path';

import {apiPath,  get, post, del } from '../core';

// requires config.headers with authorization
export const getTokens = async ({username, config}) => {
  let tokens;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  try {
    tokens = await get({url, config});
  } catch { tokens = null; }
  return tokens;
};

// requires config.headers with authorization
export const createToken = async ({username, config}) => {
  let token;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const payload = {"name": config.tokenid};
  try {
    token = await post({url, payload, config});
  } catch { token = []; }
  return token;
};

// requires config.headers with authorization
export const ensureToken = async ({username, config}) => {
  let token;
  const tokens = await getTokens({username, config});
  if (tokens) {
    const tokenMatches = tokens.filter(_token => _token.name === config.tokenid);
    if (tokenMatches) {
      const token = tokenMatches[0];
      await deleteToken({username, token, config});
    }
  }
  token = await createToken({username, config});
  return token;
};

// requires config.headers with authorization
export const deleteToken = async ({username, token, config}) => {
  let success;
  const id = token.id.toString();
  const url = Path.join(apiPath, 'users', username, 'tokens', id);
  try {
    await del({url, config});
    success = true;
  } catch { success = false; }
  return success;
};