import React from 'react';
import PropTypes from 'prop-types';

import { useFile } from '.';

export const FileContext = React.createContext();

export function FileContextProvider({
  config: _config,
  authentication,
  repository,
  filepath,
  file,
  onFile,
  defaultContent,
  create,
  children,
}) {
  const {
    state, actions, component, config,
  } = useFile({
    config: _config, authentication, repository, filepath, file, onFile, defaultContent, create,
  });

  const context = {
    state,
    actions,
    component,
    config,
  };

  return (
    <FileContext.Provider value={context}>
      {children}
    </FileContext.Provider>
  );
};

FileContextProvider.propTypes = {
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
    }).isRequired,
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
  }).isRequired,
};
