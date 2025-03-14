/// <reference types="jest" />
import * as core from '../http/http';
import * as helpers from './branches';
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

describe('Branches', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('readBranch', () => {
        it('should read a branch', async () => {
            const getSpy = jest.spyOn(core, 'get');
            const params = {
                owner: 'a_owner',
                repo: 'a_repo',
                branch: 'a_branch',
                config,
            };
            const res = await helpers.readBranch(params);
            expect(getSpy).toHaveBeenCalledTimes(1);
            expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
                config,
                noCache: true,
                url: `api/v1/repos/${params.owner}/${params.repo}/branches/${params.branch}`,
            }));
            expect(res).toEqual('OK');
        });
    });

});