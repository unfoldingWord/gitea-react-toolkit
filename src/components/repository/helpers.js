
import {
  createFork,
  readForks,
  createRepo,
  readRepo,
  updateRepo,
  deleteRepo,
} from '../..';

export const forkRepository = async ({ repository, config }) => {
  const { owner: { username }, name } = repository;
  const response = await createFork({ owner: username, repo: name, config });
  return response;
};

export const repositoryForks = async ({ repository, config }) => {
  const { owner: { username }, name } = repository;
  const response = await readForks({ owner: username, repo: name, config });
  return response;
};

export const createRepository = async ({ repo, settings, config }) => {
  const _settings = {
    name: repo,
    description: `${repo || settings.name} created via API.`,
    private: false,
    ...settings,
  }
  const response = await createRepo({ repo, settings: _settings, config });
  return response;
};

export const readRepository = async ({ owner, repo, config }) => {
  const response = await readRepo({ owner, repo, config });
  return response;
};

export const saveRepository = async ({ repository, settings, config }) => {
  const { owner: { username }, name } = repository;
  const response = await updateRepo({ owner: username, repo: name, settings, config });
  return response;
};

export const deleteRepository = async ({ repository, settings, config }) => {
  const { owner: { username }, name } = repository;
  const response = await deleteRepo({ owner: username, repo: name, settings, config });
  return response;
};
