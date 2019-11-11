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
      const postMock = jest.spyOn(core, 'post');
      const params = {
        repo: 'a_repo',
        settings: {},
        config,
      };
      const res = await helpers.createRepo(params);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(postMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        payload: { auto_init: true, name: params.repo },
        url: 'api/v1/user/repos',
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('readRepo', () => {
    it('should read a repo', async () => {
      const getMock = jest.spyOn(core, 'get');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
      };
      const res = await helpers.readRepo(params);
      expect(getMock).toHaveBeenCalledTimes(1);
      expect(getMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('ensureRepo', () => {
    it('should ensure a repo', async () => {
      const getMock = jest.spyOn(core, 'get');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
        settings: {},
      };
      const res = await helpers.ensureRepo(params);
      expect(getMock).toHaveBeenCalledTimes(1);
      expect(getMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(res).toEqual('OK');
    });

    it('should ensure a repo', async () => {
      const getMock = jest.spyOn(core, 'get');
      const postMock = jest.spyOn(core, 'post');
      const params = {
        owner: 'a_owner',
        repo: 'fail',
        config,
        settings: {},
      };
      const res = await helpers.ensureRepo(params);
      expect(getMock).toHaveBeenCalledTimes(1);
      expect(getMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        noCache: true,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
      }));
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(postMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        payload: { auto_init: true, name: params.repo },
        url: 'api/v1/user/repos',
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('updateRepo', () => {
    it('should update a repo', async () => {
      const patchMock = jest.spyOn(core, 'patch');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
        settings: {},
      };
      const res = await helpers.updateRepo(params);
      expect(patchMock).toHaveBeenCalledTimes(1);
      expect(patchMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
        payload: {},
      }));
      expect(res).toEqual('OK');
    });
  });

  describe('deleteRepo', () => {
    it('should delete a repo', async () => {
      const delMock = jest.spyOn(core, 'del');
      const params = {
        owner: 'a_owner',
        repo: 'a_repo',
        config,
      };
      const res = await helpers.deleteRepo(params);
      expect(delMock).toHaveBeenCalledTimes(1);
      expect(delMock).toHaveBeenCalledWith(expect.objectContaining({
        config,
        url: `api/v1/repos/${params.owner}/${params.repo}`,
        payload: {},
      }));
      expect(res).toEqual('OK');
    });
  });
});