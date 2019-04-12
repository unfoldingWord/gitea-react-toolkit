import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'git-tree-cache',
});

const api = setup({
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 60 * 1000, // d*h*m*s*ms
    exclude: { query: false },
    key: req => {
      // if (req.params) debugger
      let serialized = req.params instanceof URLSearchParams ?
      req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});

export const get = async ({url, params}) => {
  const {data} = await api.get(url, { params });
  return data;
};

export const fetchTree = async ({url}) => {
  const response = await get({url});
  const {tree} = response;
  return tree;
};
