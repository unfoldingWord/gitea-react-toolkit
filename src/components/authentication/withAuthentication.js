import React, { useState } from "react";

import { Authentication } from './Authentication';

export function withAuthentication(Component) {
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

export default withAuthentication;
