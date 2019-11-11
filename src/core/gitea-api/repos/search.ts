import path from 'path';

import {
  apiPath, get, getUID,
} from '../';
import { APIConfig } from '../core.d';

interface RepositoryExistsOptions {
  owner: string;
  config: APIConfig;
  repository: object;
}

export const repositoryExists = async ({
  owner, repository, config,
}: RepositoryExistsOptions): Promise<boolean> => {
  const uid = await getUID({ username: owner, config });
  const params = { q: repository, uid };
  const url = path.join(apiPath, 'repos', 'search');
  const repos = await get({
    url, params, config,
  });

  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

interface RepositorySearchOptions {
  owner: string;
  config: APIConfig;
  query: string;
}

// /repos/search?q=ulb&uid=4598&limit=50&exclusive=true
export const repositorySearch = async ({
  owner, query, config,
}: RepositorySearchOptions): Promise<any[]> => {
  let _query = query;

  if (_query) {
    _query = _query.replace(/_/g, '\\_');
    _query = _query.replace(/\s+/g, '%');
    _query = _query.replace(/\*/g, '_');
  }

  let repositories = [];
  const params: { q: string; limit: number; uid?: string; exclusive?: boolean } = { q: _query, limit: 50 };

  if (owner) {
    params.uid = await getUID({ username: owner, config });
    params.exclusive = true;
  }

  const url = path.join(apiPath, 'repos', 'search');

  try {
    repositories = await get({
      url, params, config,
    });
  } catch {
    repositories = [];
  }
  return repositories;
};
