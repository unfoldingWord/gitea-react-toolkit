import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import {
  Repositories, Search, repoTreeUrl,
} from '../..';
import {
  deleteRepository,
  forkRepository,
  saveRepository,
  repositoryForks,
} from './helpers';
import { Repository } from '.';

function useRepository({
  repositories,
  urls,
  defaultOwner,
  defaultQuery,
  config,
  authentication,
  repository: __repository,
  onRepository,
  branch: __branch,
}) {
  const [branch, setBranch] = useState(__branch);
  const repository = __repository && deepFreeze(__repository);

  const hasRepository = repository && repository.name && repository.owner && repository.permissions;
  const user = (authentication && authentication.user) ? authentication.user : undefined;

  const update = useCallback((repo) => {
    let _repo;

    if (repo) {
      _repo = { ...repo, branch };
      const tree_url = repoTreeUrl(_repo);
      _repo = { ..._repo, tree_url };
    };
    onRepository(_repo);
  }, [branch, onRepository]);

  useEffect(() => {
    if (onRepository) onRepository(repository);
  }, [repository, onRepository]);

  const updateBranch = useCallback((_branch) => {
    setBranch(_branch);
  }, []);

  useEffect(() => {
    if (__branch !== branch) setBranch(__branch);
  }, [__branch, branch]);

  useEffect(() => {
    if (repository && branch !== repository.branch) update({ ...repository, branch });
  }, [branch, repository, update]);

  const dangerouslyDelete = useCallback(() => {
    if (user && user.username === repository.owner.username) {
      deleteRepository({ repository, config });
      window.setTimeout(update, 500);
    };
  }, [user, repository, config, update]);

  const fork = useCallback(() => {
    if (!(user && user.username === repository.owner.username)) {
      forkRepository({ repository, config });
      update();
    };
  }, [config, repository, update, user]);

  const save = useCallback(async (settings) => {
    if (repository.permissions.admin) {
      const _repository = await saveRepository({ repository, settings, config });
      update(_repository);
      return _repository;
    };
  }, [config, repository, update]);

  const forks = useCallback(() => {
    repositoryForks({ repository, config });
  }, [repository, config]);

  const close = useCallback(() => {
    update();
  }, [update]);

  let component = <></>;
  // TODO: add Repository component when state

  if (hasRepository) {
    component = <Repository repository={repository} config={config} onRepository={onRepository} />;
  } else if (urls || repositories) {
    component = (
      <Repositories
        urls={urls}
        repositories={repositories}
        onRepository={update}
        config={config}
      />
    );
  } else if (config) {
    let username;

    if (authentication) username = authentication.user.username;
    component = (
      <Search
        defaultOwner={defaultOwner || username}
        defaultQuery={defaultQuery}
        onRepository={update}
        config={config}
      />
    );
  };

  return {
    state: repository,
    actions: {
      close,
      update,
      dangerouslyDelete,
      fork,
      save,
      forks,
      updateBranch,
    },
    component,
    config,
  };
};

useRepository.propTypes = {
  /** Urls array to get repository data, if repository data is not provided. */
  urls: PropTypes.array,
  /** Repositories data array to render, if urls not provided. */
  repositories: PropTypes.array,
  /** Prefill the owner search field. */
  defaultOwner: PropTypes.string,
  /** Prefill the query search field. */
  defaultQuery: PropTypes.string,
  /** Configuration to pass through to the Search/Repositories component. */
  config: PropTypes.shape({
    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: PropTypes.string,
  }).isRequired,
};

export default useRepository;
