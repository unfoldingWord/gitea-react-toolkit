import Path from 'path';
import {
    apiPath, get, post, patch, del, ExtendConfig,
} from '..';

interface ReadBranchOptions {
    owner: string;
    repo: string;
    branch: string;
    config: ExtendConfig;
}

// GET /api/v1/repos/{owner}/{repo}/branches/{branch}
export const readBranch = async ({
                                   owner, repo, branch, config,
                               }: ReadBranchOptions): Promise<object> => {
    const url = Path.join(apiPath, 'repos', owner, repo, 'branches', branch);
    let response;

    try {
        response = await get({
            url, config, noCache: true,
        });
    } catch (error) {
        response = null;
    }
    return response;
};
