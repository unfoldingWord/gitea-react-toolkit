import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
} from '@material-ui/core';
import {
  LockOutlined,
} from '@material-ui/icons';

function LoginFormComponent({
  classes,
  authentication,
  actionText,
  errorText,
  onSubmit,
}) {
  const [formData, setFormData] = useState({});

  let user;
  if (authentication) user = authentication.user;

  const updateFormData = (event) => {
    const {type, name, value, checked} = event.target;
    let _formData = {...formData};
    if (type === 'checkbox') _formData[value] = checked;
    else _formData[name] = value;
    setFormData(_formData);
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={user && user.avatar_url ? user.avatar_url : null}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        {(user) ? user.full_name : actionText}
      </Typography>
      <Typography component="p" style={{ color: 'red' }}>
        {errorText}
      </Typography>
      <form className={classes.form}>
        <TextField name="username" type="text" label="Username" required
          variant="outlined" margin="normal" fullWidth
          disabled={!!user} defaultValue={user ? user.username: ''}
          onChange={updateFormData}
        />
        <TextField name="password" type="password" label="Password" required
          variant="outlined" margin="normal" fullWidth
          disabled={!!user} defaultValue={user ? user.username: ''}
          onChange={updateFormData}
        />
        <FormControlLabel
          label="Remember me"
          control={
            <Checkbox color="primary" value="remember" disabled={!!user}
              id={'remember-' + Math.random()} onChange={updateFormData} />
          }
        />
        <Button type="button" fullWidth variant="contained"
          color={(user) ? "secondary" : "primary"}
          className={classes.submit}
          onClick={() => {
            onSubmit(formData);
          }}
        >
          {(user) ? 'Logout' : actionText}
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
