// import Path from 'path';
import localforage from 'localforage';
import axios from 'axios';
import { setup } from 'axios-cache-adapter';

// import { repositoryExists } from './gitApi';

// import {
//   getFileFromZip,
// } from './gitZip';

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});

const api = setup({
  crossDomain: true,
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 60 * 1000,
    exclude: { query: false },
    key: req => {
      // if (req.params) debugger
      let serialized = req.params instanceof URLSearchParams ?
      req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});

// // https://git.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
// export const fetchFileFromServer = async ({username, repository, path, branch='master', config}) => {
//   const repoExists = await repositoryExists({username, repository});
//   if (repoExists) {
//     const url = Path.join(username, repository, 'raw/branch', branch, path);
//     try {
//       const data = await get({url, config});
//       return data;
//     }
//     catch(error) {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

// export const getFile = async ({username, repository, path, branch, config}) => {
//   let file;
//   file = await getFileFromZip({username, repository, path, branch, config});
//   if (!file) {
//     file = await fetchFileFromServer({username, repository, path, branch, config});
//   }
//   return file;
// }

export const get = async ({url, params, config={}, noCache}) => {
  if (config.server) config.baseURL = config.server;
  let response;
  if (noCache) response = await axios.get(url, {...config, params});
  else response = await api.get(url, {...config, params});
  const {data} = response;
  return data;
};

export const post = async ({url, payload, config}) => {
  if (config.server) config.baseURL = config.server;
  const {data} = await axios.post(url, payload, config);
  return data;
};

export const put = async ({url, payload, config}) => {
  if (config.server) config.baseURL = config.server;
  const {data} = await axios.put(url, payload, config);
  return data;
};
