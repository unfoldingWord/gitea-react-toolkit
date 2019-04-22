import Path from 'path';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';

import { repositoryExists } from './gitApi';

import {
  getFileFromZip,
} from './gitZip';

const baseURL = 'https://bg.door43.org/';

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});

const api = setup({
  baseURL: baseURL,
  crossDomain: true,
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
export const fetchFileFromServer = async ({username, repository, path, branch='master', options}) => {
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

export const getFile = async ({username, repository, path, branch, options}) => {
  let file;
  file = await getFileFromZip({username, repository, path, branch, options});
  if (!file) {
    file = await fetchFileFromServer({username, repository, path, branch, options});
  }
  return file;
}

export const get = async ({url, path, params, options}) => {
  let _url = path;
  options = options || {};
  let _options = {...options, params};
  if (url) {
    options.baseURL = '';
    _url = url;
  }
  if (path) _url = path;
  const {data} = await api.get(_url, { options: _options });
  return data;
};

export const post = async ({uri, payload, options}) => {
  const {data} = await api.post(uri, payload, options );
  return data;
};
