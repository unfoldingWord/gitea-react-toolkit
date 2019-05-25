import Path from 'path';

import { get, post } from '../';

const apiPath = 'api/v1';

// GET /repos/{owner}/{repo}/forks
export const readForks = async ({owner, repo, config}) => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const response = await get({url, config});
  return response;
};

// POST /repos/{owner}/{repo}/forks
export const createFork = async ({owner, repo, organization, config}) => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'forks');
  const payload = (organization) ? {organization} : {};
  const response = await post({url, payload, config});
  return response;
};
