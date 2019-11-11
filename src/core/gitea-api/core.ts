import localforage from 'localforage';
import axios from 'axios';
import { setup } from 'axios-cache-adapter';
import { authorizationHeaders } from './authentication';
import { APIConfig } from './core.d';
import { AuthToken } from './index.d';
export const apiPath = 'api/v1';
const DEFAULT_MAX_AGE = 1000;

const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});

const api = setup({
  crossDomain: true,
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 1 * DEFAULT_MAX_AGE,
    exclude: { query: false },
    key: req => {
      const serialized = req.params instanceof URLSearchParams ?
        req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});

interface RestAPI {
  config: ExtendConfig;
  url: string;
  payload: object;
}

export interface ExtendConfig {
  token: AuthToken;
  tokenid: string;
  headers?: object;
  server?: string;
  data?: object;
}

export const extendConfig = (config: ExtendConfig): APIConfig => {
  const authHeaders = authorizationHeaders({ token: config.token });
  const headers = { ...config.headers, ...authHeaders };
  const _config = {
    baseURL: config.server, ...config, headers,
  };
  return _config;
};

interface Get {
  config: ExtendConfig;
  url: string;
  params?: object;
  noCache?: number | boolean;
}

export const get = async ({
  url, params = {}, config, noCache,
}: Get): Promise<any> => {
  const _config = extendConfig(config);
  let response;

  if (noCache) {
    const _params = { noCache: Math.random(), ...params };
    response = await axios.get(url, { ..._config, params: _params });
  } else {
    response = await api.get(url, { ..._config, params });
  }

  const { data } = response;
  return data;
};

export const post = async ({
  url, payload, config,
}: RestAPI): Promise<object> => {
  const _config = extendConfig(config);
  const { data } = await axios.post(url, payload, _config);
  return data;
};

export const put = async ({
  url, payload, config,
}: RestAPI): Promise<object> => {
  const _config = extendConfig(config);
  const { data } = await axios.put(url, payload, _config);
  return data;
};

export const patch = async ({
  url, payload, config,
}: RestAPI): Promise<object> => {
  const _config = extendConfig(config);
  const { data } = await axios.patch(url, payload, _config);
  return data;
};

export const del = async ({
  url, payload, config,
}: RestAPI): Promise<object> => {
  const _config = extendConfig(config);
  config.data = payload;
  const { data } = await axios.delete(url, _config);
  return data;
};