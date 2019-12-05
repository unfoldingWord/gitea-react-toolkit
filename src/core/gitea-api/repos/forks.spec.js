/// <reference types="jest" />
import * as helpers from './forks';
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

describe('readForks', () => {
  it('should read forks given proper config and repo path', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_repo',
      config,
    };
    const res = await helpers.readForks(params);
    expect(res).toEqual('OK');
  });

  it('should fail to read forks for some reason', () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      config,
    };
    return expect(helpers.readForks(params)).rejects.toEqual('Request failed with status code 404');
  });
});

describe('createFork', () => {
  it('should create a fork given proper config, organization and repo path', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_repo',
      organization: 'a_organization',
      config,
    };
    const res = await helpers.createFork(params);
    expect(res).toEqual('OK');
  });

  it('should create a fork given proper config repo path and no organization', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_repo',
      config,
    };
    const res = await helpers.createFork(params);
    expect(res).toEqual('OK');
  });

  it('should fail to create a fork for some reason', () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      organization: 'a_organization',
      config,
    };
    return expect(helpers.createFork(params)).rejects.toEqual('Request failed with status code 404');
  });
});