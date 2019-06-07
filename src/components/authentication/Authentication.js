import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import { LoginForm } from './LoginForm';
import { authenticate } from '../../core';

function AuthenticationComponent({
  classes,
  messages: {
    actionText,
    genericError,
    usernameError,
    passwordError,
  },
  authentication,
  onAuthentication,
  config,
}) {
  const [error, setError] = useState();

  const onSubmit = async ({username, password, remember}) => {
    if (authentication && onAuthentication) {
      onAuthentication();
    } else {
      try {
        const authentication = await authenticate({username, password, config});
        authentication.remember = remember;
        if (authentication) {
          const {user, token} = authentication;
          if (user && token) {
            setError();
            onAuthentication(authentication);
          } else {
            if (!user) setError(usernameError);
            else if (!token) setError(passwordError);
          }
        }
      } catch {
        setError(genericError);
      }
    }
  }

  return (
    <LoginForm
      authentication={authentication}
      actionText={actionText}
      errorText={error}
      onSubmit={onSubmit}
    />
  )
}

AuthenticationComponent.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
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

AuthenticationComponent.defaultProps = {
  messages: {
    actionText: "Login",
    genericError: "Something went wrong, please try again.",
    usernameError: "Username does not exist.",
    passwordError: "Password is invalid.",
  }
};

const styles = (theme) => ({
  root: {},
});

export const Authentication = withStyles(styles)(AuthenticationComponent);
