import React, {
  useState, useCallback, useContext,
} from 'react';
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

import { RepositoryContext, AuthenticationContext } from '../..';

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

function RepositoryQuickCreate() {
  const classes = useStyles();
  const [repo, setRepo] = useState();
  const { state: authentication } = useContext(AuthenticationContext);
  const { actions: { create } } = useContext(RepositoryContext);

  const { user: { username, avatar_url } } = authentication;

  const handleCreate = useCallback(() => {
    create({ name: repo });
  }, [repo, create]);

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

RepositoryQuickCreate.propTypes = {};

export default RepositoryQuickCreate;
