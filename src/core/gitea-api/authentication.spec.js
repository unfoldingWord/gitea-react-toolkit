/// <reference types="jest" />
import * as helpers from './authentication';
jest.unmock('axios');
jest.unmock('axios-cache-adapter');
jest.mock('./users', () => ({ ...require.requireActual('./users'), getUser: () => Promise.resolve({ id: 'test-user' }) }));
const TEST_TOKEN = 'encrypted123456789';


describe('encodeAuthentication', () => {
  it('should encode authentication given username/password', () => {
    const params = {
      username: 'username',
      password: 'password',
    };
    const res = helpers.encodeAuthentication(params);
    expect(res).toEqual(expect.stringMatching(/Basic\s/ig));
  });

  it('should encode authentication given token', () => {
    const params = { token: TEST_TOKEN };
    const res = helpers.encodeAuthentication(params);
    expect(res).toEqual(expect.stringMatching(/token/ig));
  });
});

describe('authorizationHeaders', () => {
  it('should return correct authorization headers given username/password', () => {
    const expected = expect.objectContaining({
      'Content-Type': expect.any(String),
      'Authorization': expect.any(String),
    });
    const params = {
      username: 'username',
      password: 'password',
    };
    const res = helpers.authorizationHeaders(params);
    expect(res).toEqual(expected);
  });

  it('should return correct authorization headers given token', () => {
    const expected = expect.objectContaining({
      'Content-Type': expect.any(String),
      'Authorization': expect.any(String),
    });
    const params = { token: TEST_TOKEN };
    const res = helpers.authorizationHeaders(params);
    expect(res).toEqual(expected);
  });
});


describe('authenticate', () => {
  it('should return correct authorization object given username/password and config object', async () => {
    const params = {
      username: 'username',
      password: 'password',
      config: {
        tokenid: 'test-token',
        token: {
          sha1: TEST_TOKEN, id: '', name: '',
        },
      },
    };
    const expected = expect.objectContaining({
      config: expect.objectContaining({
        headers: expect.objectContaining({
          'Authorization': expect.stringMatching(/token\s/),
          'Content-Type': 'application/json',
        }),
        token: {
          sha1: TEST_TOKEN, id: '', name: '',
        },
        tokenid: params.config.tokenid,
      }),
      user: expect.objectContaining({ id: expect.any(String) }),
    });
    const res = await helpers.authenticate(params);
    expect(res).toEqual(expected);
  });
});