
/// <reference types="jest" />
import * as helpers from './authentication';

describe('encodeAuthentication', () => {
  it('should encode authentication given correct params', () => {
    const params = {
      username: 'username',
      password: 'password',
    };
    const res = helpers.encodeAuthentication(params);
    expect(res).toEqual(expect.stringMatching(/Basic\s/ig));
  });
});