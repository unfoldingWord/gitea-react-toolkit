import Path from 'path';
import { APIConfig } from '../http/http.d';
import {
  apiPath, get, ERROR_SERVER_UNREACHABLE, ERROR_NETWORK_DISCONNECTED,
} from '../http/http';

export const getUser = async ({ username, config }: {
  username: string;
  config: APIConfig;
}): Promise<{ id: object } | null> => {
  let user = null;
  const url = Path.join(apiPath, 'users', username);

  try {
    user = await get({ url, config });
  } catch (e) {
    const errorMessage = e && e.message ? e.message : '';

    if (errorMessage.match(ERROR_SERVER_UNREACHABLE) || errorMessage.match(ERROR_NETWORK_DISCONNECTED)) {
      throw e;
    }
  }
  return user;
};

export const getUID = async ({ username, config }: {
  username: string;
  config: APIConfig;
}): Promise<string> => {
  let uid;

  try {
    const user = await getUser({ username, config });

    if (user) {
      uid = user.id;
    }
  } catch {
    uid = null;
  }
  return uid;
};
