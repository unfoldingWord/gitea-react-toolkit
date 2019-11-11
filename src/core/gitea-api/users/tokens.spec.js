/// <reference types="jest" />
import * as helpers from './tokens';

jest.mock('../core', () => ({
  ...require.requireActual('../core'),
  get: ({ config }) => config.headers ? Promise.resolve([{
    name: 'user-token',
    id: 'test-id',
    sha1: 'encrypted123456789',
  }]) : Promise.reject(),
  post: ({ url }) => !url.match(/fail/ig) ? Promise.resolve([{
    name: 'user-token',
    id: 'test-id',
    sha1: 'encrypted123456789',
  }]) : Promise.reject(),
  del: ({ url }) => !url.match(/fail/ig) ? Promise.resolve() : Promise.reject(),
}));

const headers = {
  'Authorization': 'basic 123456789',
  'Content-Type': 'application/json',
};

describe('getTokens', () => {
  const params = {
    username: 'username',
    config: {
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string',
      },
      tokenid: 'test-id',
    },
  };

  it('should not get tokens without headers.config', () => expect(helpers.getTokens(params)).resolves.toEqual(null));

  it('should get tokens with headers.config', () => {
    params.config.headers = headers;

    return expect(helpers.getTokens(params)).resolves.toEqual([{
      'id': 'test-id', 'name': 'user-token', 'sha1': 'encrypted123456789',
    }]);
  });
});

describe('createTokens', () => {
  const params = {
    username: 'username',
    config: {
      headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string',
      },
      tokenid: 'token-id',
    },
  };
  const expected = [{
    'id': 'test-id', 'name': 'user-token', 'sha1': 'encrypted123456789',
  }];

  it('should create tokens from a user', () => expect(helpers.createToken(params)).resolves.toEqual(expected));
  it('should not create tokens from an invalid user', () => {
    params.username = 'fail';
    return expect(helpers.createToken(params)).resolves.toEqual([]);
  });
});


describe('deleteToken', () => {
  const params = {
    username: 'username',
    config: {
      headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string',
      },
      tokenid: 'token-id',
    },
    token: {
      sha1: 'string',
      id: 'string',
      name: 'string',
    },
  };

  it('should delete the token', () => expect(helpers.deleteToken(params)).resolves.toEqual(true));
  it('should not delete tokens from an invalid user', () => {
    params.username = 'fail';
    return expect(helpers.deleteToken(params)).resolves.toEqual(false);
  });
});

describe('ensureTokens', () => {
  const params = {
    username: 'username',
    config: {
      headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string',
      },
      tokenid: 'token-id',
    },
  };

  it('should delete tokens from match', async () => {
    const expected = [{
      'id': 'test-id', 'name': 'user-token', 'sha1': 'encrypted123456789',
    }];
    const res = await helpers.ensureToken(params);
    expect(res).toEqual(expected);
  });
});