import React, {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { Authentication } from '../authentication';
import { getAuth, saveAuth } from '../authentication/helpers';

function UserMenuComponent({
  classes,
  authentication,
  onAuthentication,
  authenticationConfig,
}) {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const updateAuthentication = useCallback((_auth) => {
    if (_auth) {
      if (_auth.remember) {
        saveAuth(_auth);
      }
      _auth.logout = () => {
        saveAuth();
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

  let avatar;

  if (authentication && authentication.user) {
    avatar = <Avatar className={classes.avatar} src={authentication.user.avatar_url} />;
  } else {
    avatar = <AccountCircle fontSize="large" />;
  }

  let authenticationModal = <div />;

  if (modal) {
    authenticationModal = (
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
  }

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
}

UserMenuComponent.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
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
  authenticationConfig: PropTypes.shape({
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = (theme) => ({
  avatar: {
    width: '35px',
    height: '35px',
  },
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
  },
});

export const UserMenu = withStyles(styles, { withTheme: true })(UserMenuComponent);
