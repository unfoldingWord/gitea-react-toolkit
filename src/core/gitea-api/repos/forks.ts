import Path from 'path';

import {
  apiPath, get, post,
} from '../';
import { APIConfig } from '../core.d';
import { ExtendConfig } from '../core';

interface ReadForks {
  (args: { owner: string; repo: string; config: APIConfig }): Promise<object>;
}

// GET /repos/{owner}/{repo}/forks
export const readForks: ReadForks = async ({
  owner, repo, config,
}) => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const response = await get({ url, config });
  return response;
};

interface CreateFork {
  (args: { owner: string; repo: string; organization: string; config: ExtendConfig }): Promise<object>;
}

// POST /repos/{owner}/{repo}/forks
export const createFork: CreateFork = async ({
  owner, repo, organization, config,
}) => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const payload = (organization) ? { organization } : {};
  const response = await post({
    url, payload, config,
  });
  return response;
};
