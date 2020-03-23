import path from 'path';
import base64 from 'base-64';
import utf8 from 'utf8';

import { apiPath, get } from '../../';

export const getTree = async ({ url, config }) => {
  const response = await get({ url, config });
  const listing = response.tree;
  return listing;
};

export const getFullTree = async ({
  owner,
  repository,
  sha,
  config,
  recursive=true,
  per_page=10000
}) => {
  let tree = [];
  let moreData = true;
  let page = 0;
  while (moreData) {
    const options = { recursive, per_page, page };
    const data = await fetchTree({owner, repository, sha, config, ...options});
    const _tree = data.tree.map(blob => {
      const getBlob = async () => {
        const _blob = await get({url: blob.url, config});
        const decoded = (_blob.encoding === 'base64') ? decodeBase64ToUtf8(_blob.content) : undefined;
        return {..._blob, decoded};
      };
      return  {...blob, getBlob};
    });
    tree = tree.concat(_tree);
    moreData = data.truncated;
    if (moreData) page ++;
  }
  return tree;
};

export const decodeBase64ToUtf8 = (encoded) => {
  const bytes = base64.decode(encoded);
  const text = utf8.decode(bytes);
  return text;
};

// http://bg.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master
export const fetchTree = async ({ owner, repository, sha='master', per_page, page, recursive, config }) => {
  const params = {recursive, per_page, page};
  const url = path.join(apiPath, 'repos', owner, repository, 'git', 'trees', sha);
  const data = await get({ url, params: params, config });
  return data;
};

// /api/v1/repos/unfoldingWord/en_ta/git/trees/master
export const repoTreeUrl = ({ full_name, branch, default_branch }) => {
  const url = path.join(apiPath, 'repos', full_name, 'git', 'trees', branch || default_branch);
  return url;
};
