import Path from 'path';

import {
  apiPath, get, post, put, del,
} from '../';
import { ExtendConfig } from '../core';

interface ModifyContentOptions {
  owner: string;
  repo: string;
  filepath: string;
  payload: object;
  config: ExtendConfig;
}

// POST /api/v1/repos/{owner}/{repo}/contents/{filepath}
export const createContent = async ({
  owner, repo, filepath, payload, config,
}: ModifyContentOptions): Promise<any> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  const response = await post({
    url, payload, config,
  });
  return response;
};

interface GetContentOptions {
  owner: string;
  repo: string;
  filepath: string;
  config: ExtendConfig;
}

// GET /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const readContent = async ({
  owner, repo, filepath, config,
}: GetContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response;

  try {
    response = await get({
      url, config, noCache: true,
    });
  } catch (error) {
    response = null;
  }
  return response;
};

// PUT /api/v1/repos/{owner}/{repo}/contents/{filepath}
export const updateContent = async ({
  owner, repo, filepath, payload, config,
}: ModifyContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response;

  try {
    response = await put({
      url, payload, config,
    });
  } catch (error) {
    response = null;
  }
  return response;
};

// DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}
export const removeFile = async ({
  owner, repo, filepath, payload, config,
}: ModifyContentOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo, 'contents', filepath);
  let response;

  try {
    response = await del({
      url, payload, config,
    });
  } catch (error) {
    response = null;
  }
  return response;
};

export const ensureFile = async ({
  owner, repo, filepath, payload, config,
}: ModifyContentOptions): Promise<object> => {
  let file = await readContent({
    owner, repo, filepath, config,
  });

  if (!file) {
    const { content } = await createContent({
      owner, repo, filepath, payload, config,
    });
    file = content;
  }
  return file;
};
