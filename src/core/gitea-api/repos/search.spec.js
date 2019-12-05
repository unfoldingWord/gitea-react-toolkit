/// <reference types="jest" />
import * as helpers from './search';
jest.mock('../core', () => ({ get: () => Promise.resolve([{ name: 'a_repo' }]), apiPath: '' }));

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

describe('Search', () => {
  describe('repositoryExists', () => {
    it('should create a repo', async () => {
      const params = {
        owner: 'a_owner',
        repository: 'a_repo',
        config,
      };
      const res = await helpers.repositoryExists(params);
      expect(res).toEqual(true);
    });
  });

  describe('repositorySearch', () => {
    it('should create a repo', async () => {
      const params = {
        owner: 'a_owner',
        query: 'a_query',
        config,
      };
      const res = await helpers.repositorySearch(params);
      expect(res).toEqual([{ name: 'a_repo' }]);
    });
  });
});