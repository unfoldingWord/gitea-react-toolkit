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
    state, actions, component, components, config,
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
    components,
    config,
  };

  return (
    <RepositoryContext.Provider value={context}>
      {children}
    </RepositoryContext.Provider>
  );
};

RepositoryContextProvider.propTypes = {
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
  }),
  /** Children to render inside of Provider */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
