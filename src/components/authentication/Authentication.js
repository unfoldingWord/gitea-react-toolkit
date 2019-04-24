import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import { LoginForm } from './LoginForm';
import { authenticate } from '../../core/git-https';

function AuthenticationComponent({
  classes,
  actionText,
  errorText,
  tokenid,
  onAuthentication,
  config,
}) {
  const [error, setError] = useState();

  const onSubmit = async ({username, password, remember}) => {
    try {
      const token = await authenticate({username, password, tokenid, config});
      onAuthentication({token, remember});
      setError();
    } catch {
      setError(errorText);
    }
  }

  return (
    <LoginForm
      actionText={actionText}
      errorText={error}
      onSubmit={onSubmit}
    />
  )
}

AuthenticationComponent.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The id of the token to create/retrieve that is used for the app. */
  tokenid: PropTypes.string.isRequired,
  /** Callback function to propogate the token used for API Authentication. */
  onAuthentication: PropTypes.func.isRequired,
  /** The text to describe the action of logging in. */
  actionText: PropTypes.string,
  /** The text to describe authentication errors. */
  errorText: PropTypes.string,
  /** The Gitea server to use when authenticating. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }).isRequired,
};

AuthenticationComponent.defaultProps = {
  errorText: "Invalid Username or Password",
};

const styles = (theme) => ({
  root: {},
});

export const Authentication = withStyles(styles)(AuthenticationComponent);
