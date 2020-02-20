import Path from 'path';

import { apiPath, get } from '../';

import {
  getFileFromZip,
} from './zip';

// https://bg.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
export const fetchFileFromServer = async ({username, repository, path, branch='master', config}) => {
  const repoExists = await repositoryExists({username, repository});
  if (repoExists) {
    const url = Path.join(username, repository, 'raw/branch', branch, path);
    try {
      const data = await get({url, config});
      return data;
    }
    catch(error) {
      return null;
    }
  } else {
    return null;
  }
};

export const getFile = async ({username, repository, path, branch, config}) => {
  let file;
  const props = {username, repository, path, branch, config};
  file = await getFileFromZip(props);
  if (!file) file = await fetchFileFromServer(props);
  return file;
};

export async function repositoryExists({username, repository, config}) {
  const uid = await getUID({username});
  const params = { q: repository, uid };
  const uri = Path.join(apiPath, 'repos', `search`);
  const {data: repos} = await get({uri, params, config});
  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

export async function getUID({username, config}) {
  const uri = Path.join(apiPath, 'users', username);
  const user = await get({uri, config});
  const {id: uid} = user;
  return uid;
}