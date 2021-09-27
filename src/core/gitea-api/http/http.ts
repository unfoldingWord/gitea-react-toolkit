import localforage from 'localforage';
import axios from 'axios';
import { setup } from 'axios-cache-adapter';
import { authorizationHeaders } from '../authentication';
import { APIConfig } from './http.d';
export const apiPath = 'api/v1';
const DEFAULT_MAX_AGE = 1000;
const SERVER_ONLINE_STATUS = 200;
export const ERROR_SERVER_UNREACHABLE = 'ERR_SERVER_UNREACHABLE';
export const ERROR_SERVER_DISCONNECT_ERROR = 'ERROR_SERVER_DISCONNECT_ERROR';
export const ERROR_NETWORK_DISCONNECTED = 'ERR_NETWORK_DISCONNECTED';
export const ERROR_NETWORK_ERROR = 'Network Error';

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
  token?: string;
  tokenid?: string;
  headers?: object;
  server?: string;
  data?: object;
}

export const extendConfig = (config: ExtendConfig): APIConfig => {
  let headers = { ...config.headers };

  if (config && config.token) {
    const authHeaders = authorizationHeaders({ token: config.token });
    headers = { ...config.headers, ...authHeaders };
  }

  const _config = {
    baseURL: config.server, ...config, headers,
  };
  return _config;
};

interface Get {
  config: APIConfig | ExtendConfig;
  url: string;
  params?: object;
  noCache?: number | boolean;
  fullResponse?: boolean;
}

/**
 * create error object from errorMessage and flag that it was from checking network connection status.  Also add http
 *      response if given
 * @param {string} errorMessage
 * @param {object} response - http response
 */
function getServerError(errorMessage, response) {
  const error = new Error(errorMessage);
  error[ERROR_SERVER_DISCONNECT_ERROR] = true; // flag that this error was from checking if server was online
  if (response) { // if we have response, add it
    error['response'] = response;
  }
  return error;
}

/**
 * Make sure that we are still connected to the server.  First checks that we are connected to local network.  If not,
 *      it throws an exception.  If local network is connected it tries to verify that server is up.  If server is
 *      not up, it throws an exception.
 *    Note - when axios returns exception, it adds the response to error.  And we add flag
 *      ERROR_SERVER_DISCONNECT_ERROR to error to simplify determining that it was an error checking that
 *      server was online.
 *
 * @param {string} serverUrl - base path for server (e.g. 'https://git.door43.org')
 * @param {ExtendConfig} config - optional axios compatible config parameters
 */
export const checkIfServerOnline = async (serverUrl, config: ExtendConfig= {}): Promise<void> => {
  if (!navigator.onLine) {
    throw getServerError(ERROR_NETWORK_DISCONNECTED, null);
  }

  let response;
  try {
      // checking if server responds
    response = await axios.get(`${serverUrl}/${apiPath}/version`, config);
  } catch (e) {
    const errorMessage = e && e.message ? e.message : '';

    if (errorMessage.match(/network error/ig)) {
      throw getServerError(ERROR_SERVER_UNREACHABLE, e?.response);
    } else {
      e[ERROR_SERVER_DISCONNECT_ERROR] = true // flag that this error was while checking if server was online
      throw e;
    }
  }

  const serverIsResponding = response?.status === SERVER_ONLINE_STATUS;
  if (!serverIsResponding) {
    throw getServerError(ERROR_SERVER_UNREACHABLE, response);
  }
};

/**
 * do http get
 * @param {string} url
 * @param {object} params
 * @param {APIConfig|ExtendConfig} config - axios compatible config parameters
 * @param {boolean} [noCache] optional flag to disable caching
 * @param {boolean} [fullResponse] optional flag to return full http response including data and statusCode, useful if you want specifics such as http codes
 */
export const get = async ({
  url, params, config, noCache, fullResponse,
}: Get): Promise<any> => {
  const _config = config ? extendConfig(config) : {};
  let response: any;

  try {
    if (noCache || _config.noCache) { // also check config for noCache
      const _params = { noCache: Math.random(), ...params };
      response = await axios.get(url, { ..._config, params: _params });
    } else {
      response = await api.get(url, { ..._config, params });
    }
  } catch (e) {
    if (!config.skipNetworkCheck) {
      await checkIfServerOnline(config.server, config);
    }
    // will arrive here if server is online
    if (fullResponse) {
      if (e?.response) { // if http error, get response
        response = e?.response;
      } else { // this is not http error, so get what we can from exception
        response = {
            statusText: e?.toString(),
            status: 1,
        }
      }
    }
  }

  if (fullResponse) {
    return response;
  }
  const data = response ? response.data : null;
  return data;
};

export const post = async ({
  url, payload, config,
}: RestAPI): Promise<any> => {
  const _config = extendConfig(config);
  const { data } = await axios.post(url, payload, _config);
  return data;
};

export const put = async ({
  url, payload, config,
}: RestAPI): Promise<any> => {
  const _config = extendConfig(config);
  const { data } = await axios.put(url, payload, _config);
  return data;
};

export const patch = async ({
  url, payload, config,
}: RestAPI): Promise<any> => {
  const _config = extendConfig(config);
  const { data } = await axios.patch(url, payload, _config);
  return data;
};

export const del = async ({
  url, payload, config,
}: RestAPI): Promise<any> => {
  const _config = extendConfig(config);
  _config.data = payload;
  const { data } = await axios.delete(url, _config);
  return data;
};

export const defaultErrorMessages = {
  actionText: 'Login',
  genericError: 'Something went wrong, please try again.',
  usernameError: 'Username does not exist.',
  passwordError: 'Password is invalid.',
  networkError: 'There is an issue with your network connection. Please try again.',
  serverError: 'There is an issue with the server please try again.',
};

export const parseError = ({ error, messages = defaultErrorMessages }) => {
  const errorMessage = error && error.message ? error.message : '';
  let friendlyError = {};

  if (errorMessage.match(ERROR_SERVER_UNREACHABLE)) {
    friendlyError = {
      errorMessage: messages.serverError,
      isRecoverable: false
    };
  }
  else if (errorMessage.match(ERROR_NETWORK_DISCONNECTED) || errorMessage.match(ERROR_NETWORK_ERROR)) {
    friendlyError = {
      errorMessage: messages.networkError,
      isRecoverable: false,
    };
  }
  else {
    friendlyError = {
      errorMessage: messages.genericError,
      isRecoverable: true,
    };
  }

  return friendlyError;
};