import Path from 'path';
import base64 from 'base-64';

import { get, post } from './gitFile';

const apiPath = 'api/v1';

export const authenticate = async ({username='', password='', config}) => {
  let authentication = {config};
  if (username) authentication.user = await getUser({username, config});
  if (password) {
    const tokens = await getTokens({username, password, config}) || [];
    const tokenMatches = tokens.filter(_token => _token.name === config.tokenid);
    if (tokenMatches.length > 0) authentication.token = tokenMatches[0];
    else authentication.token = await createToken({username, password, config});
  }
  return authentication;
};

export const getUser = async ({username, config}) => {
  let user;
  const url = Path.join(apiPath, 'users', username);
  try {
    user = await get({url, config});
  } catch { user = null; }
  return user;
};

export const getUID = async ({username, config}) => {
  let uid;
  try {
    const user = await getUser({username, config});
    uid = user.id;
  } catch { uid = null; }
  return uid;
};

export const getTokens = async ({username, password, config}) => {
  let tokens;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  config.headers = {
      'Content-Type': 'application/json',
      'Authorization': authentication,
  };
  try {
    tokens = await get({url, config});
  } catch { tokens = []; }
  return tokens;
};

export const createToken = async ({username, password, config={}}) => {
  let token;
  const url = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  config.headers = {
    'Content-Type': 'application/json',
    'Authorization': authentication,
  };
  const payload = {"name": config.tokenid};
  try {
    token = await post({url, payload, config});
  } catch { token = []; }
  return token;
};

export const encodeAuthentication = ({username, password, token}) => {
  let authentication;
  if (token) {
    let sha1 = typeof token === 'object' ? token.sha1 : token;
    authentication = `token ${sha1}`;
  } else if (username && password) {
    authentication = 'Basic ' + base64.encode(`${username}:${password}`);
  }
  return authentication;
};

export const getTree = async ({url, config}) => {
  const response = await get({url, config});
  const listing = response.tree;
  return listing;
};

// http://bg.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master
export const fetchTree = async ({owner, repository, sha='master', config}) => {
  try {
    const url = Path.join(apiPath, 'repos', owner, repository, 'git/trees', sha);
    const data = await get({url, config});
    const tree = JSON.parse(data);
    return tree;
  } catch(error) {
    return null;
  }
};

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
  let repositories = [];
  let params = {q: query, limit: 50};
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

// https://bg.door43.org/api/v1/repos/unfoldingWord/en_ta/git/trees/master
export const repoTreeUrl = ({full_name, branch, default_branch}) => {
  const url = Path.join(apiPath, 'repos', full_name, 'git', 'trees', branch || default_branch);
  return url;
}
