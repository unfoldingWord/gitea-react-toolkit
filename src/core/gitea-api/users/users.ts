import Path from 'path';
import { APIConfig } from '../core.d';
import { apiPath, get } from '../core';

export const getUser = async ({ username, config }: {
  username: string;
  config: APIConfig;
}): Promise<{ id: object; } | null> => {
  let user = null;
  const url = Path.join(apiPath, 'users', username);
  user = await get({ url, config });
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
