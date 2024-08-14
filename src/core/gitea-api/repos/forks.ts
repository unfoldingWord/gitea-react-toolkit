import Path from 'path';

import { APIConfig } from '../http/http.d';
import {
  apiPath, get, post, ExtendConfig,
} from '..';

interface ReadForksOptions {
  owner: string;
  repo: string;
  config: APIConfig;
}

// GET /repos/{owner}/{repo}/forks
export const readForks = async ({
  owner, repo, config,
}: ReadForksOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const response = await get({ url, config });
  return response;
};

interface CreateForkOptions {
  owner: string;
  repo: string;
  organization: string;
  config: ExtendConfig;
}

// POST /repos/{owner}/{repo}/forks
export const createFork = async ({
  owner, repo, organization, config,
}: CreateForkOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const payload = (organization) ? { organization } : {};
  const response = await post({
    url, payload, config,
  });
  return response;
};
