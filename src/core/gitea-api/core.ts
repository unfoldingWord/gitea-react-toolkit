import localforage from 'localforage';
import axios from 'axios';
import { setup } from 'axios-cache-adapter';

import { authorizationHeaders } from './authentication';
import { APIConfig } from './core.d';
import { AuthToken } from './index.d';

export const apiPath = 'api/v1';

interface restAPICall {
  (args: {
    config: { token: AuthToken, tokenid: string; headers: object; server?: string; data?: object };
    url: string;
    payload: object;
  }): Promise<object>;
}

interface extendConfig {
  (args: { token: AuthToken, tokenid: string; headers?: object; server?: string; }): APIConfig;
}

export const extendConfig: extendConfig = (config) => {
  const authHeaders = authorizationHeaders({ token: config.token });
  const headers = { ...config.headers, ...authHeaders };
  const _config = { baseURL: config.server, ...config, headers };
  return _config;
};

interface get {
  (args: {
    config: { token: AuthToken, tokenid: string; headers?: object; server?: string; };
    url: string;
    params?: object;
    noCache?: number;
  }): Promise<any>;
}

export const get: get = async ({ url, params = {}, config, noCache }) => {
  const _config = extendConfig(config);
  let response;
  if (noCache) {
    const _params = { noCache: Math.random(), ...params };
    response = await axios.get(url, { ..._config, params: _params });
  }
  else response = await api.get(url, { ..._config, params });
  const { data } = response;
  return data;
};

export const post: restAPICall = async ({ url, payload, config }) => {
  const _config = extendConfig(config);
  const { data } = await axios.post(url, payload, _config);
  return data;
};

export const put: restAPICall = async ({ url, payload, config }) => {
  const _config = extendConfig(config);
  const { data } = await axios.put(url, payload, _config);
  return data;
};

export const patch: restAPICall = async ({ url, payload, config }) => {
  const _config = extendConfig(config);
  const { data } = await axios.patch(url, payload, _config);
  return data;
};

export const del: restAPICall = async ({ url, payload, config }) => {
  const _config = extendConfig(config);
  config.data = payload;
  const { data } = await axios.delete(url, _config);
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