import Path from 'path';

import { get } from './gitFile';

const apiPath = 'api/v1';

// http://bg.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master
export async function fetchTree({username, repository, sha='master'}) {
  try {
    const uri = Path.join(apiPath, 'repos', username, repository, 'git/trees', sha);
    const data = await get({uri});
    const tree = JSON.parse(data);
    return tree;
  } catch(error) {
    return null;
  }
};

export async function getUID({username}) {
  const uri = Path.join(apiPath, 'users', username);
  const user = await get({uri});
  const {id: uid} = user;
  return uid;
}

export async function repositoryExists({username, repository}) {
  const uid = await getUID({username});
  const params = { q: repository, uid };
  const uri = Path.join(apiPath, 'repos', `search`);
  const {data: repos} = await get({uri, params});
  const repo = repos.filter(repo => repo.name === repository)[0];
  return !!repo;
};

export async function recursiveTree({username, repository, path, sha}) {
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

export async function fileExists({username, repository, path, branch}) {
  // get root listing
  recursiveTree()
  // get recursive path listing
}
