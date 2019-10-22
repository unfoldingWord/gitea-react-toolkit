import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import localforage from 'localforage';

const authenticationStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'authentication-store',
});
const saveAuth = (_auth) => {
  if (_auth) {
    const value = JSON.stringify(_auth);
    authenticationStore.setItem('authentication', value);
  } else {
    authenticationStore.removeItem('authentication');
  }
};
const getAuth = async () => {
  const value = await authenticationStore.getItem('authentication');
  return JSON.parse(value);
};

import { Authentication } from './Authentication';

function withAuthenticationComponent(Component) {
  return function AuthenticatedComponent ({
    authentication,
    onAuthentication,
    authenticationConfig: {
      messages,
      ...config
    },
    ...props
  }) {
    const [auth, setAuth] = useState(authentication);

    useEffect(() => {
      if (!auth) getAuth().then(_auth => updateAuthentication(_auth));
    }, [auth]);

    const isAuthenticated = () => (auth && auth.token && auth.token && auth.user);

    const updateAuthentication = (_auth) => {
      if (_auth) {
        if (_auth.remember) saveAuth(_auth);
        _auth.logout = () => {
          saveAuth();
          updateAuthentication();
        }
      }
      if (onAuthentication) onAuthentication(_auth);
      else setAuth(_auth);
    };

    let component = <div />;
    if (!isAuthenticated() && config) {
      component = (
        <Authentication
          messages={messages}
          config={config}
          onAuthentication={updateAuthentication}
        />
      );
    }

    if (isAuthenticated()) {
      component = <Component {...props} authentication={auth} />;
    }

    return  component;
  }
}

withAuthenticationComponent.propTypes = {
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
  authenticationConfig: PropTypes.shape({
    /** Override the default text and errors. Must override all or none. */
    messages: PropTypes.shape({
      actionText: PropTypes.string.isRequired,
      genericError: PropTypes.string.isRequired,
      usernameError: PropTypes.string.isRequired,
      passwordError: PropTypes.string.isRequired,
    }),
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: PropTypes.string.isRequired,
  }).isRequired,
};

export const withAuthentication = withAuthenticationComponent;
