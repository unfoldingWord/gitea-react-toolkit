import localforage from 'localforage';
import axios from 'axios';
import { setup } from 'axios-cache-adapter';

export const apiPath = 'api/v1';

export const get = async ({url, params, config={}, noCache}) => {
  if (config.server) config.baseURL = config.server;
  let response;
  if (noCache) {
    const _params = {noCache: Math.random(), ...params};
    response = await axios.get(url, {...config, params: _params});
  }
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

export const patch = async ({url, payload, config}) => {
  if (config.server) config.baseURL = config.server;
  const {data} = await axios.patch(url, payload, config);
  return data;
};

export const del = async ({url, payload, config}) => {
  if (config.server) config.baseURL = config.server;
  config.data = payload;
  const {data} = await axios.delete(url, config);
  return data;
};

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});

const api = setup({
  crossDomain: true,
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 1 * 1000,
    exclude: { query: false },
    key: req => {
      // if (req.params) debugger
      let serialized = req.params instanceof URLSearchParams ?
      req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});