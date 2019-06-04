
import {
  createFork,
  readForks,
  createRepo,
  readRepo,
  updateRepo,
  deleteRepo,
} from '../../core';

export const extendRepository = ({repository, authentication, updateRepository, config}) => {
  const user = (authentication && authentication.user) ? authentication.user : undefined;
  if (user && user.username === repository.owner.username) {
    repository.dangerouslyDelete = () => {
      deleteRepository({repository, config});
      window.setTimeout(updateRepository, 500);
    };
  } else {
    repository.fork = () => {
      forkRepository({repository, config});
      updateRepository();
    };
  }
  if (repository.permissions.admin) {
    repository.update = async (settings) => {
      const _repository = await updateRepositorySettings({repository, settings, config});
      updateRepository(_repository);
      return _repository;
    };
  }
  repository.forks = () => {
    repositoryForks({repository, config});
  };
  repository.close = () => {
    updateRepository();
  };
  return repository;
};

export const forkRepository = async ({repository, config}) => {
  const { owner: { username }, name } = repository;
  const response = await createFork({owner: username, repo: name, config});
  return response;
};

export const repositoryForks = async ({repository, config}) => {
  const { owner: { username }, name } = repository;
  const response = await readForks({owner: username, repo: name, config});
  return response;
};

export const createRepository = async ({repo, settings, config}) => {
  const _settings = {
    name: repo,
    description: `${repo} created via API.`,
    private: false,
    ...settings,
  }
  const response = await createRepo({repo, settings: _settings, config});
  return response;
};

export const readRepository = async ({owner, repo, config}) => {
  const response = await readRepo({owner, repo, config});
  return response;
};

export const updateRepositorySettings = async ({repository, settings, config}) => {
  const { owner: { username }, name } = repository;
  const response = await updateRepo({owner: username, repo: name, settings, config});
  return response;
};

export const deleteRepository = async ({repository, settings, config}) => {
  const { owner: { username }, name } = repository;
  const response = await deleteRepo({owner: username, repo: name, settings, config});
  return response;
};
