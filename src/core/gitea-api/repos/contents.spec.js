/// <reference types="jest" />
import * as helpers from './contents';
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

describe('createContent', () => {
  const payload = { hello: 'world' };

  it('should create a file from path and proper config params', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_user',
      filepath: 'my/test/path',
      payload,
      config,
    };
    const res = await helpers.createContent(params);
    expect(res).toEqual('OK');
  });

  it('should fail to create a file for some reason', () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      filepath: 'my/test/path',
      payload,
      config,
    };
    return expect(helpers.createContent(params)).rejects.toEqual('Request failed with status code 404');
  });
});

describe('readContent', () => {
  it('should read a file from path and proper config params', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_user',
      filepath: 'my/test/path',
      config,
    };
    const res = await helpers.readContent(params);
    expect(res).toEqual('OK');
  });

  it('should fail to read a file for some reason', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      filepath: 'my/test/path',
      config,
    };
    const res = await helpers.readContent(params);
    expect(res).toEqual(null);
  });
});

describe('updateContent', () => {
  const payload = { hello: 'world' };

  it('should update a file from path and proper config params', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_user',
      filepath: 'my/test/path',
      payload,
      config,
    };
    const res = await helpers.updateContent(params);
    expect(res).toEqual('OK');
  });

  it('should fail to update a file for some reason', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      filepath: 'my/test/path',
      payload,
      config,
    };
    const res = await helpers.updateContent(params);
    expect(res).toEqual(null);
  });
});

describe('removeFile', () => {
  const payload = { hello: 'world' };

  it('should remove a file from path and proper config params', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'a_user',
      filepath: 'my/test/path',
      payload,
      config,
    };
    const res = await helpers.removeFile(params);
    expect(res).toEqual('OK');
  });

  it('should fail to remove a file for some reason', async () => {
    const params = {
      owner: 'a_owner',
      repo: 'fail',
      filepath: 'my/test/path',
      payload,
      config,
    };
    const res = await helpers.removeFile(params);
    expect(res).toEqual(null);
  });
});