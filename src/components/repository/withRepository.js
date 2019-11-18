import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Repositories, Search } from '../';
import { Repository } from './Repository';

import { extendRepository } from './helpers';

function withRepositoryComponent(Component) {
  return function RepositoryComponent({
    repository,
    onRepository,
    ...props
  }) {
    const [repo, setRepo] = useState(repository);

    const { authentication } = props;
    let repositoryConfig = {};
    if (props.repositoryConfig) {
      const { repositories, urls, defaultOwner, defaultQuery, ...config } = props.repositoryConfig;
      repositoryConfig = { repositories, urls, defaultOwner, defaultQuery, config };
    }
    if (authentication && authentication.config) {
      repositoryConfig.config = { ...repositoryConfig.config, ...authentication.config };
    }
    const {
      repositories,
      urls,
      defaultOwner,
      defaultQuery,
      config
    } = repositoryConfig;

    const hasRepository = () => (repo && repo.name && repo.owner && repo.permissions);

    const updateRepository = (_repo) => {
      let __repo;
      if (_repo) {
        __repo = { ..._repo };
        __repo = extendRepository({ repository: __repo, authentication, updateRepository, config });
      }
      if (onRepository) onRepository(__repo);
      else setRepo(__repo);
    };

    let component = <div />;
    if (!hasRepository() && (urls || repositories)) {
      component = (
        <Repositories
          urls={urls}
          repositories={repositories}
          onRepository={updateRepository}
          config={config}
        />
      );
    } else if (!hasRepository() && config) {
      let username;
      if (authentication) username = authentication.user.username;
      component = (
        <Search
          defaultOwner={defaultOwner || username}
          defaultQuery={defaultQuery}
          onRepository={updateRepository}
          config={config}
        />
      );
    }

    if (hasRepository()) {
      component = <Component {...props} repository={repo} blobConfig={config} />;
    }

    return component;
  }
}

withRepositoryComponent.propTypes = {
  /** Configuration to pass through to the Search/Repositories component. */
  repositoryConfig: PropTypes.shape({
    /** Urls array to get repository data, if repository data is not provided. */
    urls: PropTypes.array,
    /** Repositories data array to render, if urls not provided. */
    repositories: PropTypes.array,
    /** Prefill the owner search field. */
    defaultOwner: PropTypes.string,
    /** Prefill the query search field. */
    defaultQuery: PropTypes.string,
    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: PropTypes.string,
  }).isRequired,
  ...Repository.propTypes,
};

export const withRepository = withRepositoryComponent;
