import React, {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { getAuth, saveAuth } from '../authentication/helpers';
import { useStyles } from './useStyles';
import { Authentication } from '..';

function UserMenu({
  authentication,
  onAuthentication,
  authenticationConfig,
}) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const updateAuthentication = useCallback(async (_auth) => {
    if (_auth) {
      if (_auth.remember) {
        await saveAuth(_auth);
      }
      _auth.logout = async () => {
        await saveAuth();
        updateAuthentication();
      };
    }
    onAuthentication(_auth);
  }, [onAuthentication]);

  useEffect(() => {
    if (!authentication) {
      getAuth().then(_auth => updateAuthentication(_auth));
    }
  }, [authentication, updateAuthentication]);

  const avatar = !(authentication && authentication.user) ? <AccountCircle fontSize="large" /> : (
    <Avatar className={classes.avatar} src={authentication.user.avatar_url} />
  );

  const authenticationModal = (!modal) ? <div /> : (
    <Modal open={true} onClose={closeModal}>
      <Paper className={classes.modal}>
        <Authentication
          authentication={authentication}
          onAuthentication={onAuthentication}
          config={authenticationConfig}
        />
      </Paper>
    </Modal>
  );

  return (
    <div>
      <IconButton
        data-test="user-menu-icon"
        onClick={openModal}
        color="inherit"
      >
        {avatar}
      </IconButton>
      {authenticationModal}
    </div>
  );
};

UserMenu.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: PropTypes.func.isRequired,
  /** Configuration for authentication to work, server and tokenid are required. */
  authenticationConfig: PropTypes.shape({
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserMenu;
