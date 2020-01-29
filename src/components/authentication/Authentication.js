import React, {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { authenticate } from '../../core';
import { LoginForm } from './LoginForm';
import { getAuth, saveAuth } from './helpers';

function Authentication({
  messages: {
    actionText,
    genericError,
    usernameError,
    passwordError,
    networkError
  },
  authentication,
  onAuthentication,
  config,
}) {
  const [error, setError] = useState();

  const logout = useCallback(() => {
    saveAuth();
  });

  const updateAuthentication = useCallback((_auth) => {
    if (_auth) {
      if (_auth.remember) {
        saveAuth(_auth);
      }
      _auth.logout = () => {
        logout();
        updateAuthentication();
      }
    }
    onAuthentication(_auth);
  }, [logout, onAuthentication]);

  useEffect(() => {
    if (!authentication) {
      getAuth().then(_authentication => {
        if (_authentication) updateAuthentication(_authentication);
      });
    }
  }, [authentication, updateAuthentication]);

  const onSubmit = async ({
    username, password, remember,
  }) => {
    if (authentication) {
      logout();
      updateAuthentication();
    } else {
      try {
        const authentication = await authenticate({
          username, password, config,
        });
        authentication.remember = remember;

        if (authentication) {
          const { user, token } = authentication;

          if (user && token) {
            setError();
            updateAuthentication(authentication);
          } else {
            if (!user) {
              setError(usernameError);
            } else if (!token) {
              setError(passwordError);
            }
          }
        }
      } catch (e) {
        const errorMessage = e && e.message ? e.message : '';

        if (errorMessage.match(/ERR_SERVER_UNREACHABLE/ig)) {
          return setError('There is an issue with the server please try again.');
        }

        if (errorMessage.match(/ERR_INTERNET_DISCONNECTED/ig)) {
          return setError(networkError);
        }
        setError(genericError);
      }
    }
  };

  return (
    <LoginForm
      config={config}
      authentication={authentication}
      actionText={actionText}
      errorText={error}
      onSubmit={onSubmit}
    />
  );
}

Authentication.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: PropTypes.func.isRequired,
  /** Override the default text and errors. Must override all or none. */
  messages: PropTypes.shape({
    actionText: PropTypes.string.isRequired,
    genericError: PropTypes.string.isRequired,
    usernameError: PropTypes.string.isRequired,
    passwordError: PropTypes.string.isRequired,
  }),
  /** Configuration for authentication to work, server and tokenid are required. */
  config: PropTypes.shape({
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: PropTypes.string.isRequired,
  }).isRequired,
};

Authentication.defaultProps = {
  messages: {
    actionText: 'Login',
    genericError: 'Something went wrong, please try again.',
    usernameError: 'Username does not exist.',
    passwordError: 'Password is invalid.',
    networkError: 'There is an issue with your network connection. Please try again.',
  },
};

export default Authentication;
