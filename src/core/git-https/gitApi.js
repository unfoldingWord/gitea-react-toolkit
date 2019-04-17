import Path from 'path';
import base64 from 'base-64';
import axios from 'axios';

import { get } from './gitFile';


const SERVER = 'https://try.gitea.io';

const api = axios.create({
  baseURL: SERVER,
});

const apiPath = 'api/v1';

export const authenticate = async ({tokenid, username='', password='', server}) => {
  let token;
  const tokens = await listTokens({username, password, server}) || [];
  const tokenMatches = tokens.filter(_token => _token.name === tokenid);
  if (tokenMatches.length > 0) token = tokenMatches[0];
  else token = await createToken({tokenid, username, password, server});
  return token;
};

export const listTokens = async ({username, password, server=SERVER}) => {
  let uri = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password, server});
  let options = {
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authentication,
    }
  };
  let {data: tokens} = await api.get(uri, options);
  return tokens;
};

export const createToken = async ({tokenid, username, password, server=SERVER}) => {
  let uri = Path.join(apiPath, 'users', username, 'tokens');
  const authentication = encodeAuthentication({username, password});
  let options = {
    baseURL: server,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authentication,
    },
  };
  const payload = {"name": tokenid};
  let {data: token} = await api.post(uri, payload, options);
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
