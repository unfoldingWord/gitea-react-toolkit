import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';
import {
  FolderShared,
} from '@material-ui/icons';

import { createRepository } from '../helpers';
import { FormCheckbox } from '.';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));

function RepositoryForm({
  authentication,
  repository,
  onRepository,
}) {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [errorText, setErrorText] = useState();

  const updateFormData = (event) => {
    const { type, name, value, checked } = event.target;
    let _formData = { ...formData };

    if (type === 'checkbox') _formData[value] = checked;
    else _formData[name] = value;
    setFormData(_formData);
  };

  let mode, config;
  const authenticated = (authentication && authentication.user);

  if (authenticated) {
    const admin = repository && repository.permissions.admin;
    config = authentication.config;

    if (!repository) mode = 'create';
    else if (admin) mode = 'edit';
  } else if (repository) mode = 'view';
  else mode = 'error';

  const disabled = (mode === 'view');

  const handleSubmit = async (settings) => {
    let repo, _errorText;

    if (mode === 'create') {
      repo = await createRepository({ settings, config });

      if (repo) onRepository(repo);

      if (!repo) _errorText = 'Error creating repository.';
    } else if (mode === 'edit') {
      repo = await repository.update(settings);

      if (!repo) _errorText = 'Error editing repository.';
    }

    if (_errorText) setErrorText(_errorText);
  };

  let actionText;

  if (mode === 'create') actionText = 'Create Repository';
  else if (mode === 'edit') actionText = 'Edit Repository';
  else if (mode === 'view') actionText = 'View Repository'
  else if (mode === 'error') {
    actionText = 'View/Edit/Create Repository';

    if (!errorText) setErrorText('Please login and/or provide a repository');
  }

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <FolderShared />
      </Avatar>
      <Typography component="h1" variant="h5">
        {actionText}
      </Typography>
      <Typography component="p" style={{ color: 'red' }}>
        {errorText}
      </Typography>
      <form className={classes.form}>
        <TextField name="name" label="Name" type="text" required
          variant="outlined" margin="normal" fullWidth
          onChange={updateFormData}
          helperText="Name must be alpha-numeric and not include spaces."
          disabled={disabled}
          defaultValue={repository ? repository.name : ''}
        />
        <TextField name="description" label="Description" type="text"
          variant="outlined" margin="normal" fullWidth
          onChange={updateFormData}
          disabled={disabled}
          defaultValue={repository ? repository.description : ''}
        />
        <FormCheckbox
          name="private" label="Private"
          onChange={updateFormData} disabled={disabled}
          checked={repository ? repository.private : false}
        />
        <Button type="button" fullWidth variant="contained" color="primary"
          className={classes.submit} disabled={disabled}
          onClick={ () => handleSubmit(formData) }
        >
          {actionText}
        </Button>
      </form>
    </div>
  );
}

RepositoryForm.propTypes = {
  /** Authentication object returned from a successful withAuthentication login. */
  authentication: PropTypes.shape({
    config: PropTypes.shape({
      server: PropTypes.string.isRequired,
      headers: PropTypes.shape({
        Authorization: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }),
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** Repository data to render, if url not provided. */
  repository: PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    tree_url: PropTypes.string,
    avatar_url: PropTypes.string,
  }),
};

RepositoryForm.defaultProps = {
  actionText: 'Repository Settings',
};

export default RepositoryForm;
