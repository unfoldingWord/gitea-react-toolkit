import React, {
  useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import { isAuthenticated } from './helpers';
import { Authentication } from '.';

function useAuthentication({
  authentication: _authentication,
  onAuthentication,
  messages,
  config,
}) {
  const authentication = _authentication && deepFreeze(_authentication);

  const update = useCallback((_auth) => {
    onAuthentication(_auth);
  }, [onAuthentication]);

  const component = useMemo(() => (
    (!isAuthenticated(authentication) && config) && (
      <Authentication
        messages={messages}
        config={config}
        authentication={authentication}
        onAuthentication={update}
      />
    )
  ), [authentication, config, messages, update]);

  const _config = (authentication && authentication.config) || config;

  const response = {
    state: authentication,
    actions: { update },
    component,
    config: _config,
  };

  return response;
};

useAuthentication.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: PropTypes.func,
  /** Configuration to pass through to the Authentication component. */
  /** Override the default text and errors. Must override all or none. */
  messages: PropTypes.shape({
    actionText: PropTypes.string.isRequired,
    genericError: PropTypes.string.isRequired,
    usernameError: PropTypes.string.isRequired,
    passwordError: PropTypes.string.isRequired,
  }),
  config: PropTypes.shape({
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: PropTypes.string.isRequired,
  }).isRequired,
};

export default useAuthentication;
