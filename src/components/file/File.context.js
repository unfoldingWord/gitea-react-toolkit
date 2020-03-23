import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  useFile,
  AuthenticationContext,
  RepositoryContext,
} from '../..';

export const FileContext = React.createContext();

export function FileContextProvider({
  config: _config,
  authentication: _authentication,
  repository: _repository,
  filepath,
  file,
  onFile,
  defaultContent,
  create,
  children,
}) {
  const { state: contextAuthentication } = useContext(AuthenticationContext);
  const { state: contextRepository, config: contextConfig } = useContext(RepositoryContext);

  const {
    state, actions, component, components, config,
  } = useFile({
    config: _config || contextConfig,
    authentication: _authentication || contextAuthentication,
    repository: _repository || contextRepository,
    filepath, file, onFile, defaultContent, create,
  });

  const context = {
    state,
    actions,
    component,
    components,
    config,
  };

  return (
    <FileContext.Provider value={context}>
      {children}
    </FileContext.Provider>
  );
};

FileContextProvider.propTypes = {
  /** Pass a previously returned file object to bypass the selection. */
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sha: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  /** Function to propogate when the Blob is selected. */
  onFile: PropTypes.func,
  /** The full filepath for the file. */
  filepath: PropTypes.string,
  /** The default string to populate the file if it doesn't exist */
  defaultContent: PropTypes.string,
  /** use a form to create a new file */
  create: PropTypes.bool,
  /** Authentication object returned from a successful withAuthentication login. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
    headers: PropTypes.shape({
      Authorization: PropTypes.string.isRequired,
    }),
  }),
  authentication: PropTypes.shape({
    config: PropTypes.shape({
      server: PropTypes.string.isRequired,
      headers: PropTypes.shape({
        Authorization: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }),
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  /** Children to render inside of Provider */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
