import { apiPath, get } from '../';

import {
  getFileFromZip,
} from './zip';

// https://bg.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
export const fetchFileFromServer = async ({username, repository, path, branch='master', config}) => {
  const repoExists = await repositoryExists({username, repository});
  if (repoExists) {
    const url = joinPaths(username, repository, 'raw/branch', branch, path);
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
  const url = joinPaths(apiPath, 'repos', `search`);
  const {data: repos} = await get({url, params, config});
  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

export async function getUID({username, config}) {
  const url = joinPaths(apiPath, 'users', username);
  const user = await get({url, config});
  const {id: uid} = user;
  return uid;
}

export function joinPaths(...paths) {
  return paths
    .map(path => path.replace(/\/+$/, '')) // Remove trailing slashes
    .join('/')
    .replace(/\/{2,}/g, '/'); // Replace multiple slashes with a single slash
}
