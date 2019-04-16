import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import { LoginForm } from './LoginForm';
import { authenticate } from '../../core/git-https';

function AuthenticateComponent({
  classes,
  actionText,
  tokenid,
  onAuthentication,
  server,
}) {
  const [errorText, setErrorText] = useState();

  const onSubmit = async ({username, password, remember}) => {
    try {
      const token = await authenticate({username, password, tokenid, server});
      onAuthentication({token, remember});
      setErrorText();
    } catch(error) {
      setErrorText("Invalid Username or Password");
    }
  }

  return (
    <LoginForm
      actionText={actionText}
      errorText={errorText}
      onSubmit={onSubmit}
    />
  )
}

AuthenticateComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  /** The id of the token to create/retrieve that is used for the app. */
  tokenid: PropTypes.string.isRequired,
  /** Callback function to propogate the token used for API Authentication. */
  onAuthentication: PropTypes.func.isRequired,
  /** The text to describe the action of logging in. */
  actionText: PropTypes.string,
  /** The server to use when authenticating. */
  server: PropTypes.string,
};

AuthenticateComponent.defaultProps = {

};

const styles = (theme) => ({
  root: {},
});

export const Authenticate = withStyles(styles)(AuthenticateComponent);
