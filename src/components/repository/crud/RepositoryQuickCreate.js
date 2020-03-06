import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import { createRepository } from '../helpers';
import { useRepository } from '..';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: '16px',
    marginTop: '20px',
  },
  avatar: {
    borderRadius: '20%',
  },
  root: {
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '40%',
    display: 'inline-block',
    marginRight: '1em',
  }
}));

function RepositoryQuickCreate({
  authentication,
  authentication: {
    user: {
      username,
      avatar_url,
    },
    config,
  },
  onRepository,
}) {
  const classes = useStyles();
  const [repo, setRepo] = useState();
  const [updated, setUpdated] = useState(false);
  const { state, actions } = useRepository({ authentication, config });

  const _update = useCallback((_repository) => {
    actions.update(_repository);
  }, [actions]);

  const _onRepository = useCallback(() => {
    if (onRepository && state && actions) onRepository({ ...state, ...actions });
  }, [onRepository, state, actions]);

  useEffect(() => {
    if (!updated && state) {
      _onRepository();
      setUpdated(true);
    }
  }, [_onRepository, state, updated]);

  const handleCreate = useCallback(async () => {
    const _repository = await createRepository({ repo, config });
    _update(_repository);
  }, [config, repo, _update]);

  return (
    <ListItem
      alignItems="flex-start"
      ContainerComponent="div"
      className={classes.root}
    >
      <ListItemAvatar className={classes.listItemAvatar}>
        <Avatar
          alt={username}
          src={avatar_url}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <form className={classes.form}>
        <div className={classes.input}>
          <TextField
            id='owner' label='Owner' type='text' disabled
            variant="outlined" margin="normal" fullWidth
            defaultValue={username}
          />
        </div>
        <div className={classes.input}>
          <TextField
            id='repo' label='Repository' type='text' required
            variant="outlined" margin="normal" fullWidth
            defaultValue="" autoComplete={undefined}
            onChange={(event) => {
              setRepo(event.target.value);
            }}
          />
        </div>
      </form>
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Add Repo"
          onClick={handleCreate}
        >
          <AddCircle />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

RepositoryQuickCreate.propTypes = {
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** A passed authentication object from login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.shape({
      /** The Gitea server to use when authenticating. */
      server: PropTypes.string.isRequired,
      /** The id of the token to create/retrieve that is used for the app. */
      tokenid: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default RepositoryQuickCreate;
