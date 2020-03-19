import React from 'react';
import PropTypes from 'prop-types';

import { useRepository } from '.';

export const RepositoryContext = React.createContext();

export function RepositoryContextProvider({
  repositories,
  urls,
  defaultOwner,
  defaultQuery,
  config: _config,
  authentication,
  repository,
  onRepository,
  branch,
  children,
}) {
  const {
    state, actions, component, config,
  } = useRepository({
    repositories, urls, defaultOwner, defaultQuery,
    config: _config, authentication, repository, branch, onRepository,
  });

  const context = {
    state,
    actions,
    component,
    config,
  };

  return (
    <RepositoryContext.Provider value={context}>
      {children}
    </RepositoryContext.Provider>
  );
};

RepositoryContextProvider.propTypes = {
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
