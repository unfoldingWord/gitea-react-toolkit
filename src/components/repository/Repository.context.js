import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useRepository, AuthenticationContext } from '../..';

export const RepositoryContext = React.createContext();

export function RepositoryContextProvider({
  full_name,
  repositories,
  urls,
  defaultOwner,
  defaultQuery,
  config: _config,
  authentication: _authentication,
  repository,
  onRepository,
  branch,
  children,
}) {
  const { state: contextAuthentication, config: contextConfig } = useContext(AuthenticationContext);
  const {
    state, actions, component, config,
  } = useRepository({
    full_name, repositories, urls, defaultOwner, defaultQuery,
    config: _config || contextConfig,
    authentication: _authentication || contextAuthentication,
    repository, branch, onRepository,
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
  }),
};
