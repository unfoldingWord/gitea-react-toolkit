import Path from 'path';

import { get, getUID } from '../';

const apiPath = 'api/v1';

export const repositoryExists = async ({owner, repository, config}) => {
  const uid = await getUID({username: owner, config});
  const params = { q: repository, uid };
  const url = Path.join(apiPath, 'repos', 'search');
  const {data: repos} = await get({url, params, config});
  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

// /repos/search?q=ulb&uid=4598&limit=50&exclusive=true
export const repositorySearch = async ({owner, query, config}) => {
  let _query = query;
  if (_query) {
    _query = _query.replace(/_/g, '\\_');
    _query = _query.replace(/\s+/g, '%');
    _query = _query.replace(/\*/g, '_');
  }
  let repositories = [];
  let params = {q: _query, limit: 50};
  if (owner) {
    params.uid = await getUID({username: owner, config});
    params.exclusive = true;
  }
  const url = Path.join(apiPath, 'repos', 'search');
  try {
    const {data} = await get({url, params, config});
    repositories = data;
  } catch {
    repositories = [];
  }
  return repositories;
};
