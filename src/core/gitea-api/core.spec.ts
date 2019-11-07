/// <reference types="jest" />
import * as helpers from './core';
const TEST_TOKEN = 'encrypted123456789';
const authToken = {
  sha1: TEST_TOKEN,
  id: 'test-id',
  name: 'test-token'
}

describe('extendConfig', () => {
  it('should pass', () => {
    const params = {
      token: authToken,
      tokenid: TEST_TOKEN,
      server: 'test-server'
    }
    const res = helpers.extendConfig(params);
    expect(res).toEqual(expect.objectContaining({
      baseURL: params.server,
      headers: expect.objectContaining({
        'Authorization': expect.stringMatching(/token\s/),
        'Content-Type': 'application/json',
      }),
      token: {
        sha1: TEST_TOKEN, id: authToken.id, name: authToken.name,
      },
      tokenid: params.tokenid,
    }))
  })
})
