import Path from 'path';

import {apiPath, get} from '../';

export const getTree = async ({url, config}) => {
  const response = await get({url, config});
  const listing = response.tree;
  return listing;
};

// http://git.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master
export const fetchTree = async ({owner, repository, sha='master', config}) => {
  try {
    const url = Path.join(apiPath, 'repos', owner, repository, 'git', 'trees', sha);
    const data = await get({url, config});
    const tree = JSON.parse(data);
    return tree;
  } catch(error) {
    return null;
  }
};

// /api/v1/repos/unfoldingWord/en_ta/git/trees/master
export const repoTreeUrl = ({full_name, branch, default_branch}) => {
  const url = Path.join(apiPath, 'repos', full_name, 'git', 'trees', branch || default_branch);
  return url;
};
