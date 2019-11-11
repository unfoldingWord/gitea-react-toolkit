/// <reference types="jest" />
import * as core from '../core';
import * as helpers from './repos';
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

describe('Repos', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('createRepo', () => {
    it('should create a repo', async () => {
      const postSpy = jest.spyOn(core, 'post');
      const params = {
        repo: 'a_repo',
        settings: {},
        config,
      };
      const res = await helpers.createRepo(params);
      expect(postSpy).toHaveBeenCalledTimes(1);
      expect(postSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        payload: { auto_init: true, name: params.repo },
        url: 'api/v1/user/repos',
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('readRepo', () => {
    it('should read a repo', async () => {
      const getSpy = jest.spyOn(core, 'get');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
      };
      const res = await helpers.readRepo(params);
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('ensureRepo', () => {
    it('should ensure a repo', async () => {
      const getSpy = jest.spyOn(core, 'get');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
        settings: {},
      };
      const res = await helpers.ensureRepo(params);
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(res).toEqual('OK');
    });

    it('should ensure a repo', async () => {
      const getSpy = jest.spyOn(core, 'get');
      const postSpy = jest.spyOn(core, 'post');
      const params = {
        owner: 'a_owner',
        repo: 'fail',
        config,
        settings: {},
      };
      const res = await helpers.ensureRepo(params);
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(postSpy).toHaveBeenCalledTimes(1);
      expect(postSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        payload: { auto_init: true, name: params.repo },
        url: 'api/v1/user/repos',
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('updateRepo', () => {
    it('should update a repo', async () => {
      const patchSpy = jest.spyOn(core, 'patch');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
        settings: {},
      };
      const res = await helpers.updateRepo(params);
      expect(patchSpy).toHaveBeenCalledTimes(1);
      expect(patchSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
        payload: {},
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('deleteRepo', () => {
    it('should delete a repo', async () => {
      const delSpy = jest.spyOn(core, 'del');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
      };
      const res = await helpers.deleteRepo(params);
      expect(delSpy).toHaveBeenCalledTimes(1);
      expect(delSpy).toHaveBeenCalledWith(expect.objectContaining({
        config,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
        payload: {},
      }));
      expect(res).toEqual('OK');
    });
  });
});