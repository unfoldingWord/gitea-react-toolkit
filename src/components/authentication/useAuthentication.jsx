import React, {
  useCallback, useMemo, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';
import {
  authenticate,
  defaultErrorMessages,
  parseError,
  ERROR_SERVER_UNREACHABLE,
  ERROR_NETWORK_DISCONNECTED,
} from '../../core';
import { LoginForm } from '.';
import { useDeepCompareCallback, useDeepCompareEffect, useDeepCompareMemo } from 'use-deep-compare';

function useAuthentication({
  messages,
  authentication: _authentication,
  onAuthentication,
  config,
  loadAuthentication,
  saveAuthentication,
  onError,
}) {
  const authentication = _authentication && deepFreeze(_authentication);

  const [error, setError] = useState();

  if (!messages) {
    messages = defaultErrorMessages;
  }

  const logout = useCallback((_auth) => {
    saveAuthentication && saveAuthentication();
  }, [saveAuthentication]);

  /*
  const update = useCallback(async (_auth) => {
    if (_auth && _auth.remember && saveAuthentication) {
      await saveAuthentication(_auth);
    }
    return onAuthentication && onAuthentication(_auth);
  }, [onAuthentication]);
*/
  const update = useCallback((_auth) => {
    if (_auth) {
      if (saveAuthentication) {
        if (_auth.remember) {
          saveAuthentication(_auth);
        }
        else {
          saveAuthentication();
        }
      }
    }

    if (onAuthentication) {
      onAuthentication(_auth);
    }
  }, [onAuthentication, saveAuthentication]);

  useDeepCompareEffect(() => {
    if (!authentication && loadAuthentication) {
      loadAuthentication().then(_authentication => {
        if (_authentication) {
          update(_authentication);
        }
      });
    }
  }, [authentication, loadAuthentication, update]);

  const onSubmitLogin = useDeepCompareCallback(async ({
    username, password, remember,
  }) => {
    try {
      const authentication = await authenticate({
        username, password, config,
      });
      authentication.remember = remember;

      if (authentication) {
        const { user, token } = authentication;

        if (user && token) {
          setError();
          update(authentication);
        } else {
          if (!user) {
            setError(messages.usernameError);
          } else if (!token) {
            setError(messages.passwordError);
          }
        }
      } else {
        console.log('authentication failed?', authentication);
      }
    } catch (e) {
      console.log('Authentication error:', e);
      const friendlyError = parseError(e);

      setError(friendlyError.errorMessage);
      onError && onError(friendlyError)
    }
  }, [
    config, logout, update,
    messages.genericError, messages.networkError, messages.passwordError, messages.serverError, messages.usernameError,
  ]);

  const onSubmit = useDeepCompareCallback(async ({
    username, password, remember,
  }) => {
    if (authentication) {
      logout();
      update();
    } else {
      await onSubmitLogin({ username, password, remember });
    }
  }, [authentication, config, logout, update, onSubmitLogin]);

  const component = useDeepCompareMemo(() => (
    config && (
      <LoginForm
        config={config}
        authentication={authentication}
        actionText={messages.actionText}
        errorText={error}
        onSubmit={onSubmit}
      />
    )
  ), [authentication, config, error, messages.actionText, onSubmit]);

  const _config = (authentication && authentication.config) || config;

  const response = {
    state: authentication,
    actions: { update, logout, onLoginFormSubmit: onSubmit, onLoginFormSubmitLogin: onSubmitLogin },
    component,
    config: _config,
    messages: messages,
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
  }),
  /** Callback function to persist authentication. */
  saveAuthentication: PropTypes.func,
  /** Callback function to retrieve persisted authentication. */
  loadAuthentication: PropTypes.func,
  /** Callback function on error. */
  onError: PropTypes.func,
};

export default useAuthentication;
