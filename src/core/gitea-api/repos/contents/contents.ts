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
  branch?: string;
  new_branch?: string;
  content?: string;
  message: string;
  author: Author;
  sha?: string;
};

interface ContentObject {
  path: string;
  sha: string;
}

export const payload = ({
  branch, new_branch, content, message, author: { email, username }, sha,
}: PayloadOptions): object => ({
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
}: ModifyContentOptions): Promise<ContentObject> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let contentObject: ContentObject;

  try {
    // TODO: Check to see if branch exists to set branch or new_branch in payload
    try {
      const _payload = payload({
        branch, content, message, author,
      });
      const response = await post({
        url, payload: _payload, config,
      });
      contentObject = response.content;
    } catch {
      const _payload = payload({
        new_branch: branch, content, message, author,
      });
      const response = await post({
        url, payload: _payload, config,
      });
      contentObject = response.content;
    }
  } catch (error) {
    throw new Error('Error creating file.');
  };
  return contentObject;
};

interface GetContentOptions {
  owner: string;
  repo: string;
  filepath: string;
  config: ExtendConfig;
  ref?: string;
};

// GET /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const readContent = async ({
  owner, repo, ref, filepath, config,
}: GetContentOptions): Promise<ContentObject> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let contentObject: ContentObject;

  try {
    contentObject = await get({
      url, config, params: { ref }, noCache: true,
    });
  } catch (error) {
    throw new Error('Error reading file.');
  };
  return contentObject;
};

// PUT /api/v1/repos/{owner}/{repo}/contents/{filepath}
export const updateContent = async ({
  config, owner, repo, branch, filepath, content, message, author, sha,
}: ModifyContentOptions): Promise<ContentObject> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let contentObject: ContentObject;

  try {
    // TODO: Check to see if branch exists to set branch or new_branch in payload
    try {
      const _payload = payload({
        branch, content, message, author, sha,
      });
      const response = await put({
        url, payload: _payload, config,
      });
      contentObject = response.content;
    } catch {
      const _payload = payload({
        new_branch: branch, content, message, author, sha,
      });
      const response = await put({
        url, payload: _payload, config,
      });
      contentObject = response.content;
    };
  } catch (error) {
    throw new Error('Error updating file.');
  };
  return contentObject;
};

// DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const deleteContent = async ({
  config, owner, repo, branch, filepath, message, author, sha,
}: ModifyContentOptions): Promise<object> => {
  let response: object;
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);

  const _payload = payload({
    branch, message, author, sha,
  });

  try {
    response = await del({
      url, payload: _payload, config,
    });
  } catch (error) {
    throw new Error('Error deleting file.');
  };
  return response;
};

export const ensureContent = async ({
  config, owner, repo, branch, filepath, content, message, author,
}: ModifyContentOptions): Promise<ContentObject> => {
  let contentObject: ContentObject;

  try { // try to read the file
    contentObject = await readContent({
      owner, repo, ref: branch, filepath, config,
    });

    if (!contentObject) throw new Error('File does not exist in branch');
  } catch {
    try { // try to update the file in case it is in the default branch
      const _contentObject = await readContent({
        owner, repo, filepath, config,
      });

      contentObject = await updateContent({
        config, owner, repo, branch, filepath, content, message, author, sha: _contentObject.sha,
      });
    } catch { // try to create the file if it doesn't exist in default or new branch
      contentObject = await createContent({
        config, owner, repo, branch, filepath, content, message, author,
      });
    };
  };

  return contentObject;
};
