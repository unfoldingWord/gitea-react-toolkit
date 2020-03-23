/* eslint-disable @typescript-eslint/no-magic-numbers */
/// <reference types="jest" />
import * as http from './http';
jest.mock('axios');
jest.mock('axios-cache-adapter');

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
    const expected = expect.objectContaining({
      baseURL: config.server,
      headers: expect.objectContaining({
        'Authorization': expect.stringMatching(/token\s/),
        'Content-Type': 'application/json',
      }),
      token: {
        sha1: TEST_TOKEN, id: authToken.id, name: authToken.name,
      },
      tokenid: config.tokenid,
    });
    const res = http.extendConfig(config);
    expect(res).toEqual(expected);
  });
});

describe('get', () => {
  it('should pass with noCache', async () => {
    const params = {
      config,
      noCache: true,
      url: 'https://passing.com',
    };
    const res = await http.get(params);
    return expect(res).toEqual('OK');
  });

  it('should pass', async () => {
    const params = {
      config,
      url: 'https://passing.com',
    };
    const res = await http.get(params);
    return expect(res).toEqual('OK');
  });


  it('should fail with 404', () => {
    const params = {
      config,
      url: 'https://failing.com',
    };

    return expect(http.get(params)).rejects.toEqual('Request failed with status code 404');
  });
});

describe('post-like methods', () => {
  it('should perform POST method', async () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };
    const res = await http.post(params);
    expect(res).toEqual('OK');
  });
  it('should perform PUT method', async () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };
    const res = await http.put(params);
    return expect(res).toEqual('OK');
  });
  it('should perform PATCH method', async () => {
    const payload = { data: '123helloWorld' };
    const params = {
      url: 'https://passing.com',
      payload,
      config,
    };
    const res = await http.patch(params);
    return expect(res).toEqual('OK');
  });
});

describe('delete', () => {
  it('should perform DELETE method', async () => {
    const params = {
      config,
      noCache: true,
      url: 'https://passing.com',
    };
    const res = await http.get(params);
    return expect(res).toEqual('OK');
  });
});