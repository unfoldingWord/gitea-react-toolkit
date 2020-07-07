import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useStyles } from './useStyles';

function LoginForm({
  config,
  authentication,
  actionText,
  errorText,
  onSubmit,
}) {
  const classes = useStyles();
  const [formData, setFormData] = useState({});

  let user;

  if (authentication) user = authentication.user;

  const updateFormData = (event) => {
    const {
      type, name, value, checked,
    } = event.target;
    const _formData = { ...formData };

    if (type === 'checkbox') _formData[value] = checked;
    else _formData[name] = value;

    setFormData(_formData);
  };

  let footer = <></>;

  if (config && config.server) {
    footer = (
      <div className={classes.footer_container}>
        <div className={classes.footer_column}>
          <Typography variant="caption">Need an account?&nbsp;</Typography>
          <Typography color="primary" variant="caption" component="a" target="_blank" href={`${config.server}/user/sign_up`}>Register now.</Typography>
        </div>
        <div className={classes.footer_column}>
          <Typography color="primary" variant="caption" component="a" target="_blank" href={`${config.server}/user/forgot_password`}>Forgot password?</Typography>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={user && user.avatar_url ? user.avatar_url : null}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        {(user) ? user.full_name : actionText}
      </Typography>
      {errorText ? (
        <Typography data-test="login-error-text" component="p" style={{ color: 'red' }}>
          {errorText}
        </Typography>) : <></>}
      <form className={classes.form}>
        <TextField data-test="username-input" name="username" type="text" label="Username" required
          variant="outlined" margin="normal" fullWidth autoComplete="username"
          disabled={!!user} defaultValue={user ? user.username : ''}
          onChange={updateFormData}
        />
        <TextField data-test="password-input" name="password" type="password" label="Password" required
          variant="outlined" margin="normal" fullWidth autoComplete="current-password"
          disabled={!!user} defaultValue={user ? user.username : ''}
          onChange={updateFormData}
        />
        <FormControlLabel
          data-test="remember-checkbox"
          label="Keep me logged in"
          control={
            <Checkbox color="primary" value="remember" disabled={!!user}
              id={'remember-' + Math.random()} onChange={updateFormData} />
          }
        />
        <Button data-test={user ? 'logout-button' : 'submit-button'} type="button" fullWidth variant="contained"
          color='primary'
          className={classes.submit}
          onClick={() => {
            onSubmit(formData);
          }}>
          {(user) ? 'Logout' : actionText}
        </Button>
        {footer}
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  /** Configuration to use for sign up/forgot password flow */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }),
  /** Callback function to propogate the username and password entered. */
  onSubmit: PropTypes.func.isRequired,
  /** The text to describe the action of logging in. */
  actionText: PropTypes.string,
  /** The text to describe the error when Authentication fails. */
  errorText: PropTypes.string,
  /** The authenticated user object */
  authentication: PropTypes.shape({ user: PropTypes.object }),
};

LoginForm.defaultProps = { actionText: 'Login' };

export const LoginFormComponent = LoginForm;
