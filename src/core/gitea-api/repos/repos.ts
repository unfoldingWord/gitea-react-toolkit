import Path from 'path';
import {
  apiPath, get, post, patch, del, ExtendConfig,
} from '..';

interface CreateRepoOptions {
  repo: string;
  settings: object;
  config: ExtendConfig;
}
// POST /api/v1/user/repos
export const createRepo = async ({
  repo, settings, config,
}: CreateRepoOptions): Promise<object> => {
  const url = Path.join(apiPath, 'user', 'repos');
  const payload = {
    name: repo,
    auto_init: true,
    // description: `${repo} created via API.`,
    // private: true,
    // readme: `# ${repo} README`,
    // license: `license text here`,
    ...settings,
  };
  const response = await post({
    url, payload, config,
  });
  return response;
};

interface ReadRepoOptions {
  owner: string;
  repo: string;
  config: ExtendConfig;
}

// GET /api/v1/repos/{owner}/{repo}
export const readRepo = async ({
  owner, repo, config,
}: ReadRepoOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo);
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

interface EnsureRepoOptions {
  repo: string;
  settings: object;
  config: ExtendConfig;
  owner: string;
}

export const ensureRepo = async ({
  owner, repo, settings, config,
}: EnsureRepoOptions): Promise<object> => {
  let repository = await readRepo({
    owner, repo, config,
  });

  if (!repository) {
    repository = await createRepo({
      repo, settings, config,
    });
  }
  return repository;
};

// PATCH /api/v1/repos/{owner}/{repo}
export const updateRepo = async ({
  owner, repo, settings, config,
}: EnsureRepoOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo);
  const payload = {
    // allow_merge_commits: true,
    // allow_rebase: true,
    // allow_rebase_explicit: true,
    // allow_squash_merge: true,
    // archived: true,
    // default_branch: "string",
    // description: "string",
    // enable_issues: true,
    // enable_pull_requests: true,
    // enable_wiki: true,
    // ignore_whitespace: true,
    // name: "string",
    // private: true,
    // website: "string",
    ...settings,
  };
  let response;

  try {
    response = await patch({
      url, payload, config,
    });
  } catch (error) {
    response = null;
  }
  return response;
};

// DELETE /api/v1/repos/{owner}/{repo}
export const deleteRepo = async ({
  owner, repo, config,
}: ReadRepoOptions): Promise<object> => {
  const url = Path.join(apiPath, 'repos', owner, repo);
  let response;

  try {
    response = await del({
      url, config, payload: {},
    });
  } catch (error) {
    response = null;
  }
  return response;
};
