import Path from 'path';
import { AuthToken } from '../index.d';
import {
  apiPath, get, post, del,
} from '..';

interface TokenConfig {
  headers?: object;
  server?: string;
  token: AuthToken;
  tokenid: string;
}

export interface TokenConfigWithHeaders {
  headers: object;
  server?: string;
  token: AuthToken;
  tokenid: string;
}

interface GetTokens {
  (args: { username: string; config: TokenConfig }): Promise<AuthToken[]>;
}

// requires config.headers with authorization
export const getTokens: GetTokens = async ({ username, config }) => {
  let tokens;
  const url = Path.join(apiPath, 'users', username, 'tokens');

  try {
    tokens = await get({ url, config });
  } catch {
    tokens = null;
  }
  return tokens;
};

interface CreateToken {
  (args: { username: string; config: TokenConfigWithHeaders }): Promise<AuthToken[]>;
}

// requires config.headers with authorization
export const createToken: CreateToken = async ({ username, config }) => {
  let token;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const payload = { 'name': config.tokenid };

  try {
    token = await post({
      url, payload, config,
    });
  } catch {
    token = undefined;
  }
  return token;
};

interface DeleteToken {
  (args: { username: string; token: AuthToken; config: TokenConfig }): Promise<boolean>;
}

// requires config.headers with authorization
export const deleteToken: DeleteToken = async ({
  username, token, config,
}) => {
  let success;
  const id = token.id.toString();
  const url = Path.join(apiPath, 'users', username, 'tokens', id);

  try {
    await del({
      url, config, payload: {},
    });
    success = true;
  } catch {
    success = false;
  }
  return success;
};


// requires config.headers with authorization
export const ensureToken: CreateToken = async ({ username, config }) => {
  const tokens = await getTokens({ username, config });

  if (tokens) {
    const tokenMatches = tokens.filter(_token => _token.name === config.tokenid);

    if (tokenMatches && tokenMatches.length) {
      const token = tokenMatches[0];

      await deleteToken({
        username, token, config,
      });
    }
  }

  const token = await createToken({ username, config });
  return token;
};