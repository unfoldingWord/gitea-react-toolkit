import Path from 'path';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';

import { repositoryExists } from './gitApi';

import {
  getFileFromZip,
} from './gitZip';

const baseURL = 'http://bg.door43.org/';

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});

const api = setup({
  baseURL: baseURL,
  cache: {
    store: cacheStore,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    exclude: { query: false },
    key: req => {
      // if (req.params) debugger
      let serialized = req.params instanceof URLSearchParams ?
      req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});

// https://git.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
export const fetchFileFromServer = async ({username, repository, path, branch='master'}) => {
  const repoExists = await repositoryExists({username, repository});
  if (repoExists) {
    const uri = Path.join(username, repository, 'raw/branch', branch, path);
    try {
      const data = await get({uri});
      return data;
    }
    catch(error) {
      return null;
    }
  } else {
    return null;
  }
};

export const getFile = async ({username, repository, path, branch}) => {
  let file;
  file = await getFileFromZip({username, repository, path, branch});
  if (!file) {
    file = await fetchFileFromServer({username, repository, path, branch});
  }
  return file;
}

export const get = async ({uri, params}) => {
  const _uri = uri.replace(baseURL, '');
  const {data} = await api.get(_uri, { params });
  return data;
};
