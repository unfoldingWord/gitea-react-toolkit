/* eslint-disable @typescript-eslint/no-var-requires */
/// <reference types="jest" />
import * as helpers from './users';
jest.mock('../core', () => ({ get: () => Promise.resolve({ id: 'test-user' }), apiPath: 'api/v1' }));

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

describe('Users', () => {
  const core = require('../core');

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('getUser', () => {
    it('should get a user', async () => {
      const getSpy = jest.spyOn(core, 'get');
      const params = { username: 'a_user', config };
      const expected = expect.objectContaining({
        config,
        url: `api/v1/users/${params.username}`,
      });
      const res = await helpers.getUser(params);
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(expected);
      expect(res).toEqual({ 'id': 'test-user' });
    });
  });

  describe('getUID', () => {
    it('should get a user', async () => {
      const getSpy = jest.spyOn(core, 'get');
      const params = { username: 'a_user', config };
      const expected = expect.objectContaining({
        config,
        url: `api/v1/users/${params.username}`,
      });
      const res = await helpers.getUID(params);
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(expected);
      expect(res).toEqual('test-user');
    });
  });
});