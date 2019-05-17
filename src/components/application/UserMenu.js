import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Modal,
  Paper,
} from '@material-ui/core';
import {
  AccountCircle,
} from '@material-ui/icons';

import { withAuthentication } from '../authentication';

function UserMenuComponent({
  classes,
  authentication,
  onAuthentication,
  authenticationConfig,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modal, setModal] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    handleClose();
    authentication.logout();
    setModal(false);
  }

  const handleLogin = () => {
    handleClose();
    setModal(true);
  }

  let avatar;
  let menuItems = [];
  if (authentication && authentication.user) {
    avatar = (
      <Avatar className={classes.avatar} src={authentication.user.avatar_url} />
    );
    menuItems.push(
      <MenuItem key={Math.random()} onClick={handleLogout}>Logout</MenuItem>
    );
  } else {
    avatar = <AccountCircle fontSize="large" />;
    menuItems.push(
      <MenuItem key={Math.random()} onClick={handleLogin}>Login</MenuItem>
    );
  }

  let authenticationModal = <div />;
  if (modal && !authentication) {
    const AuthenticationComponent = withAuthentication(<div />);
    authenticationModal = (
      <Modal open={true} onClose={() => setModal(false)}>
        <Paper className={classes.modal}>
          <AuthenticationComponent
            authentication={authentication}
            onAuthentication={onAuthentication}
            authenticationConfig={authenticationConfig}
          />
        </Paper>
      </Modal>
    );
  }

  return (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {avatar}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {menuItems}
      </Menu>
      {authenticationModal}
    </div>
  );
}

UserMenuComponent.propTypes = {
  ...withAuthentication.propTypes
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
