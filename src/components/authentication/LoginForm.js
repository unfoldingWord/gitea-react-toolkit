import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
import {
  LockOutlined,
} from '@material-ui/icons';

import { FormInput } from './FormInput';

function LoginFormComponent({
  classes,
  actionText,
  errorText,
  onSubmit,
}) {
  const [formData, setFormData] = useState({});

  const updateFormData = (event) => {
    const {type, id, name, value, checked} = event.target;
    let _formData = {...formData};
    if (type === 'checkbox') _formData[id] = checked;
    else _formData[name] = value;
    setFormData(_formData);
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        {actionText}
      </Typography>
      <Typography component="p" style={{ color: 'red' }}>
        {errorText}
      </Typography>
      <form className={classes.form}>
        <FormInput id="username" type="text" label="Username" required
          onChange={updateFormData}
        />
        <FormInput id="password" type="password" label="Password" required
          onChange={updateFormData}
        />
        <FormControlLabel
          label="Remember me"
          control={
            <Checkbox color="primary" value="remember"
              id={'remember-' + Math.random()} onChange={updateFormData} />
          }
        />
        <Button type="button" fullWidth variant="contained" color="primary"
          className={classes.submit}
          onClick={() => {
            onSubmit(formData);
          }}
        >
          {actionText}
        </Button>
      </form>
    </div>
  );
}

LoginFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Callback function to propogate the username and password entered. */
  onSubmit: PropTypes.func.isRequired,
  /** The text to describe the action of logging in. */
  actionText: PropTypes.string,
  /** The text to describe the error when Authentication fails. */
  errorText: PropTypes.string,
};

LoginFormComponent.defaultProps = {
  actionText: 'Login',
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export const LoginForm = withStyles(styles)(LoginFormComponent);
