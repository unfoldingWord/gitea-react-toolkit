import Path from 'path';

import { get } from './gitFile';

const apiPath = 'api/v1';

export const getTree = async ({url}) => {
  const response = await get({uri: url});
  const listing = response.tree;
  return listing;
};

// http://bg.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master
export const fetchTree = async ({username, repository, sha='master'}) => {
  try {
    const uri = Path.join(apiPath, 'repos', username, repository, 'git/trees', sha);
    const data = await get({uri});
    const tree = JSON.parse(data);
    return tree;
  } catch(error) {
    return null;
  }
};

export const getUID = async ({username}) => {
  const uri = Path.join(apiPath, 'users', username);
  const user = await get({uri});
  const {id: uid} = user;
  return uid;
};

export const repositoryExists = async ({username, repository}) => {
  const uid = await getUID({username});
  const params = { q: repository, uid };
  const uri = Path.join(apiPath, 'repos', `search`);
  const {data: repos} = await get({uri, params});
  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

export const recursiveTree = async ({username, repository, path, sha}) => {
  let tree = {};
  const pathArray = path.split();
  const results = fetchTree({username, repository, sha});
  const result = results.tree.filter(item => item.path === pathArray[0])[0];
  if (result) {
    if (result.type === 'tree') {
      const childPath = pathArray.slice(1).join('/');
      const children = recursiveTree({username, repository, path: childPath, sha: result.sha});
      tree[result.path] = children;
    } else if (result.type === 'blob') {
      tree[result.path] = true;
    }
  }
};

export const fileExists = async ({username, repository, path, branch}) => {
  // get root listing
  recursiveTree()
  // get recursive path listing
};
