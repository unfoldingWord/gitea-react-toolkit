/// <reference types="jest" />
import * as helpers from './tokens';

jest.mock('../core', () => ({
  ...require.requireActual('../core'),
  get: () => Promise.resolve([{
    name: 'user-token',
    id: 'test-id',
    sha1: 'encrypted123456789',
  }]),
}));

describe('getTokens', () => {
  it('should pass', async () => {
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
    const res = await helpers.getTokens(params);

    expect(res).toEqual([{
      'id': 'test-id', 'name': 'user-token', 'sha1': 'encrypted123456789',
    }]);
  });
});
