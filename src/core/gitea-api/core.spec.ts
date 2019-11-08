/* eslint-disable @typescript-eslint/no-magic-numbers */
/// <reference types="jest" />
import * as helpers from './core';
jest.mock('axios-cache-adapter', () => ({
  setup: () => ({
    get: (url) =>
      url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  }),
}));
jest.mock('axios', () => ({
  get: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  post: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  patch: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  put: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
}));

const TEST_TOKEN = 'encrypted123456789';
const authToken = {
  sha1: TEST_TOKEN,
  id: 'test-id',
  name: 'test-token',
};
const config = {
  token: authToken,
  tokenid: TEST_TOKEN,
  server: 'test-server',
};

describe('extendConfig', () => {
  it('should pass', () => {
    const res = helpers.extendConfig(config);

    expect(res).toEqual(expect.objectContaining({
      baseURL: config.server,
      headers: expect.objectContaining({
        'Authorization': expect.stringMatching(/token\s/),
        'Content-Type': 'application/json',
      }),
      token: {
        sha1: TEST_TOKEN, id: authToken.id, name: authToken.name,
      },
      tokenid: config.tokenid,
    }));
  });
});

describe('get', () => {
  it('should pass with noCache', () => {
    const params = {
      config,
      noCache: true,
      url: 'https://passing.com',
    };

    return expect(helpers.get(params)).resolves.toEqual('OK');
  });

  it('should pass', () => {
    const params = {
      config,
      url: 'https://passing.com',
    };

    return expect(helpers.get(params)).resolves.toEqual('OK');
  });


  it('should fail with 404', () => {
    const params = {
      config,
      url: 'https://failing.com',
    };

    return expect(helpers.get(params)).rejects.toThrowError('Request failed with status code 404');
  });
});

describe('post-like methods', () => {
  it('should perform POST method', () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };

    return expect(helpers.post(params)).resolves.toEqual('OK');
  });
  it('should perform PUT method', () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };

    return expect(helpers.put(params)).resolves.toEqual('OK');
  });
  it('should perform PATCH method', () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };

    return expect(helpers.patch(params)).resolves.toEqual('OK');
  });
});

describe('delete', () => {
  it('should perform DELETE method', () => {
    const params = {
      config,
      noCache: true,
      url: 'https://passing.com',
    };

    return expect(helpers.get(params)).resolves.toEqual('OK');
  });
});