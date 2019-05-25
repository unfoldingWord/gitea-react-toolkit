import Path from 'path';

import { get } from '../core';

const apiPath = 'api/v1';

export const getUser = async ({username, config}) => {
  let user;
  const url = Path.join(apiPath, 'users', username);
  try {
    user = await get({url, config});
  } catch { user = null; }
  return user;
};

export const getUID = async ({username, config}) => {
  let uid;
  try {
    const user = await getUser({username, config});
    uid = user.id;
  } catch { uid = null; }
  return uid;
};
