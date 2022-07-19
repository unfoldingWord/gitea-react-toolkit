import Path from 'path';
import base64 from 'base-64';
import utf8 from 'utf8';

import { getContentFromFile } from '../../../../components/file/helpers';
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
  onOpenValidation?: (filename: string, content: string, url: string) => never;
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
  content: string;
  html_url: string;
  name: string;
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
    } catch (e) {
      console.warn('Branch doesnt exists. Thus, creating new branch', e);

      const _payload = payload({
        new_branch: branch, content, message, author, sha,
      });
      const response = await put({
        url, payload: _payload, config,
      });
      contentObject = response.content;
    };
  } catch (error) {
    // Allow original error to propagate.
    // This allows switching based on error messages above.
    throw error;
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
  config, owner, repo, branch, filepath, content, message, author, onOpenValidation,
}: ModifyContentOptions): Promise<ContentObject> => {
  let contentObject: ContentObject;

  try {// try to read the file
    // NOTE: when a source file is fetched for translation, the following readConent
    // should always succeed since the file was selected from a UI which
    // is showing files that exist.
    //
    // OTOH, if the file is the target this will return null (the first time),
    // throwing the error. When the error is thrown, the catch will fire.
    contentObject = await readContent({
      owner, repo, ref: branch, filepath, config,
    });
    if (!contentObject) throw new Error('File does not exist in branch');
    //
    // add on open validation checks here for source side or existing branch content
    //
    const _content:string = await getContentFromFile(contentObject);
    if ( onOpenValidation ) {
      onOpenValidation(filepath, _content,contentObject.html_url);
    }
  } catch {
    try {
      // try to read file from the default branch
      // if it exists content will be returned without creating a new branch
      contentObject = await readContent({
        owner, repo, filepath, config,
      });

      if (!contentObject) {
        throw new Error('File does not exist in default branch');
      }

    } catch {
      // use content object unconnected to branch or repo.
      contentObject = {
        name: filepath.slice(filepath.lastIndexOf('/')+1),
        content: content || '',
        path: filepath,
        sha: 'new',
        html_url:'',
      }
    }
  }

  return contentObject;
};
