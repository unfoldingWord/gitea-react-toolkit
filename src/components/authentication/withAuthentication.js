import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Authentication } from './Authentication';

function withAuthenticationComponent(Component) {
  return function AuthenticatedComponent ({
    authentication,
    authenticationConfig: {
      onAuthentication,
      messages,
      ...config
    },
    ...props
  }) {
    const [auth, setAuth] = useState(authentication);

    const isAuthenticated = () => (auth && auth.token && auth.user);

    let component = <Component {...props} authentication={auth} />;

    const authenticationError = (
      <Authentication
        messages={messages}
        config={config}
        onAuthentication={(_auth) => {
          setAuth(_auth);
          if (onAuthentication) {
            onAuthentication(_auth);
          }
        }}
      />
    );

    if (!isAuthenticated()) {
      component = authenticationError;
    }

    return component;
  }
}

withAuthenticationComponent.propTypes = {
  /** You can pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
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
