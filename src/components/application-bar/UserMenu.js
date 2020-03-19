import React, { useState, useContext } from 'react';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { useStyles } from './useStyles';
import { AuthenticationContext } from '..';

function UserMenu() {
  const classes = useStyles();
  const { state: authentication, component } = useContext(AuthenticationContext) || {};
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const avatar = !(authentication && authentication.user) ? <AccountCircle fontSize="large" /> : (
    <Avatar className={classes.avatar} src={authentication.user.avatar_url} />
  );

  const authenticationModal = (!modal) ? <></> : (
    <Modal open={true} onClose={closeModal}>
      <Paper className={classes.modal}>
        {component}
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

export default UserMenu;
