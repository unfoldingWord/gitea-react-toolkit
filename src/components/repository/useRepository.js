import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import {
  Repository, RepositoryForm, Repositories, Search, repoTreeUrl,
} from '../..';
import {
  deleteRepository,
  forkRepository,
  saveRepository,
  repositoryForks,
  createRepository,
  readRepository,
  storeRepositoryZip,
  removeRepositoryZip,
  getFileFromRepositoryZip,
} from './helpers';
import { useDeepCompareCallback, useDeepCompareEffect } from 'use-deep-compare';

function useRepository({
  repositories,
  full_name: __full_name,
  urls,
  defaultOwner,
  defaultQuery,
  config: _config,
  authentication,
  repository: __repository,
  onRepository,
  branch,
}) {
  const repository = __repository && deepFreeze(__repository);
  const { full_name } = repository || {};
  const user = authentication && authentication.user;
  const config = _config || authentication?.config || {};

  // Due to objects not memoizing in useCallback, deconstruction is necessary
  // const { owner: { username: owner }, name: repo } = repository;

  const update = useCallback((repo) => {
    if (onRepository) {
      let _repo;

      if (repo) {
        _repo = { ...repo, branch };
        const tree_url = repoTreeUrl(_repo);
        _repo = { ..._repo, tree_url };
      };
      onRepository(_repo);
    };
  }, [branch, onRepository]);

  const read = useCallback(async ({ owner, name }) => {
    const _repository = await readRepository({
      owner, repo: name, config,
    });
    update(_repository);
  }, [config, update]);

  const create = useDeepCompareCallback(async (settings) => {
    const _repository = await createRepository({ settings, config });
    update(_repository);
  }, [config, update]);

  const dangerouslyDelete = useDeepCompareCallback(() => {
    if (user && user.username === repository.owner.username) {
      deleteRepository({ repository, config });
      window.setTimeout(update, 500);
    };
  }, [user, repository, config, update]);

  const fork = useDeepCompareCallback(async () => {
    if ((user && user.username) !== repository.owner.username) {
      const _repo = await forkRepository({ repository, config });
      update(_repo);
    };
  }, [config, repository, update, user]);

  const save = useDeepCompareCallback(async (settings) => {
    let _repository;

    if (repository.permissions.admin) {
      _repository = await saveRepository({
        repository, settings, config,
      });
      update(_repository);
    };
  }, [config, repository, update]);

  const storeZip = useDeepCompareCallback(async () => {
    await storeRepositoryZip({ repository, config });
  }, [repository, config]);

  const removeZip = useDeepCompareCallback(async () =>{
    await removeRepositoryZip({ repository, config });
  }, [repository, config]);

  const fileFromZip = useDeepCompareCallback(async (filepath) => {
    const file = await getFileFromRepositoryZip({
      repository, filepath, config,
    });
    return file;
  }, [repository, config]);

  const forks = useDeepCompareCallback(() => {
    repositoryForks({ repository, config });
  }, [repository, config]);

  const close = useCallback(() => {
    update();
  }, [update]);

  useDeepCompareEffect(() => {
    if (repository && branch !== repository.branch) {
      update({ ...repository, branch });
    }
  }, [branch, repository, update]);

  useEffect(() => {
    if (__full_name && !full_name) {
      const [owner, name] = __full_name.split('/');
      read({ owner, name });
    };
  }, [full_name, __full_name, read]);

  const hasRepository = repository && repository.name && repository.owner && repository.permissions;

  const username = authentication && authentication.user && authentication.user.username;
  const components = {
    search: config && (
      <Search
        defaultOwner={defaultOwner || username}
        defaultQuery={defaultQuery}
        onRepository={update}
        config={config}
      />
    ),
    browse: (urls || repositories) && (
      <Repositories
        urls={urls}
        repositories={repositories}
        onRepository={update}
        config={config}
      />
    ),
    view: hasRepository && (
      <Repository repository={repository} config={config} onRepository={onRepository} />
    ),
    form: hasRepository && (
      <RepositoryForm />
    ),
  };

  let component = <></>;

  if (hasRepository) {
    component = components.view;
  } else if (urls || repositories) {
    component = components.browse;
  } else if (config) {
    component = components.search;
  };

  return {
    state: repository,
    actions: {
      close,
      create,
      update,
      dangerouslyDelete,
      fork,
      save,
      forks,
      read,
      storeZip,
      removeZip,
      fileFromZip,
    },
    component,
    components,
    config,
  };
};

useRepository.propTypes = {
  /** Repository data to render, if url not provided. */
  repository: PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    tree_url: PropTypes.string,
    avatar_url: PropTypes.string,
    branch: PropTypes.string,
  }),
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** Full name of the repo, `owner/name` */
  full_name: PropTypes.string,
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Urls array to get repository data, if repository data is not provided. */
  urls: PropTypes.array,
  /** Repositories data array to render, if urls not provided. */
  repositories: PropTypes.array,
  /** Prefill the owner search field. */
  defaultOwner: PropTypes.string,
  /** Prefill the query search field. */
  defaultQuery: PropTypes.string,
  /** The name of the branch to read/write files */
  branch: PropTypes.string,
  /** Configuration to pass through to the Search/Repositories component. */
  config: PropTypes.shape({
    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: PropTypes.string,
  }).isRequired,
};

export default useRepository;
