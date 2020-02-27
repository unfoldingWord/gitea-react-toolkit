import Path from 'path';
import base64 from 'base-64';
import utf8 from 'utf8';

import { ExtendConfig } from '../../http/http';
import {
  apiPath, get, post, put, del,
} from '../..';

interface ModifyContentOptions {
  config: ExtendConfig;
  owner: string;
  repo: string;
  branch: string;
  filepath: string;
  content?: string;
  message: string;
  author: Author;
  sha?: string;
};

interface Author {
  email: string;
  username: string;
};

interface PayloadOptions {
  branch?: string,
  new_branch?: string,
  content?: string,
  message: string,
  author: Author,
  sha?: string,
};

export const payload = ({
  branch, new_branch, content, message, author: { email, username }, sha,
}: PayloadOptions) => ({
  branch,
  new_branch,
  content: base64.encode(utf8.encode(content || '')),
  message,
  author: {
    email: email,
    name: username,
  },
  sha,
});

// POST /api/v1/repos/{owner}/{repo}/contents/{filepath}
export const createContent = async ({
  config, owner, repo, branch, filepath, content, message, author,
}: ModifyContentOptions): Promise<any> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response: object;
  
  try {
    // TODO: Check to see if branch exists to set branch or new_branch in payload
    try {
      let _payload = payload({
        branch, content, message, author,
      });
      response = await post({
        url, payload: _payload, config,
      });
    } catch {
      let _payload = payload({
        new_branch: branch, content, message, author,
      });
      response = await post({
        url, payload: _payload, config,
      });
    }
  } catch (error) {
    throw new Error('Error creating file.');
  }
  return response;
};

interface GetContentOptions {
  owner: string;
  repo: string;
  filepath: string;
  config: ExtendConfig;
  ref: string;
};

// GET /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const readContent = async ({
  owner, repo, filepath, config, ref,
}: GetContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response: object;

  try {
    response = await get({
      url, config, params: { ref }, noCache: true,
    });
  } catch (error) {
    throw new Error('Error reading file.');
  }
  return response;
};

// PUT /api/v1/repos/{owner}/{repo}/contents/{filepath}
export const updateContent = async ({
  config, owner, repo, branch, filepath, content, message, author, sha,
}: ModifyContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response: object;

  try {
    // TODO: Check to see if branch exists to set branch or new_branch in payload
    try {
      const _payload = payload({
        branch, content, message, author, sha,
      });
      response = await put({
        url, payload: _payload, config,
      });
    } catch {
      const _payload = payload({
        new_branch: branch, content, message, author, sha,
      });
      response = await put({
        url, payload: _payload, config,
      });
    }
  } catch (error) {
    throw new Error('Error updating file.');
  }
  return response;
};

// DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const deleteContent = async ({
  config, owner, repo, branch, filepath, message, author, sha
}: ModifyContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);

  let _payload = payload({
    branch, message, author, sha,
  });

  let response: object;

  try {
    response = await del({
      url, payload: _payload, config,
    });
  } catch (error) {
    throw new Error('Error deleting file.');
  }
  return response;
};

export const ensureContent = async ({
  config, owner, repo, branch, filepath, content, message, author,
}: ModifyContentOptions): Promise<object> => {
  let file = await readContent({
    owner, repo, filepath, config, ref: branch,
  });

  if (!file) {
    const { content: _content } = await createContent({
      config, owner, repo, branch, filepath, content, message, author,
    });
    file = _content;
  }
  return file;
};
