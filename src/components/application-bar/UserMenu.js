import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
} from '@material-ui/core';
import {
  AccountCircle,
} from '@material-ui/icons';

import { Authentication } from '../authentication';

function UserMenuComponent({
  classes,
  authentication,
  onAuthentication,
  authenticationConfig,
}) {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  let avatar;
  if (authentication && authentication.user)
    avatar = <Avatar className={classes.avatar} src={authentication.user.avatar_url} />;
  else
    avatar = <AccountCircle fontSize="large" />;

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
  ...Authentication.propTypes
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
  }
});

export const UserMenu = withStyles(styles, { withTheme: true })(UserMenuComponent);
