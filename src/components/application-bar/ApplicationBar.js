import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

// import { withAuthentication, withRepository, withFile } from '../';
import styles from './styles';
import {
  UserMenu, DrawerMenu, RepositoryMenu,
} from './';

function ApplicationBarComponent({
  classes,
  title,
  buttons,
  drawerMenu,
  authentication,
  onAuthentication,
  authenticationConfig,
  repository,
  onRepository,
  repositoryConfig,
  blob,
  onBlob,
}) {
  let _authenticationConfig = { ...authenticationConfig };
  let _repositoryConfig = { ...repositoryConfig };

  if (authentication && authentication.config) {
    _authenticationConfig = authentication.config;
    _repositoryConfig.defaultOwner = authentication.user.username;
  }

  if (!repository && blob) {
    onBlob();
  }

  const drawerMenuComponent = (
    <DrawerMenu
      drawerMenu={drawerMenu}
      repository={repository}
      config={_repositoryConfig}
      blob={blob}
      onBlob={onBlob}
    />
  );
  const repositoryMenuComponent = (
    <RepositoryMenu
      authentication={authentication}
      repository={repository}
      onRepository={onRepository}
      repositoryConfig={_repositoryConfig}
    />
  );
  const userMenuComponent = (
    <UserMenu
      authentication={authentication}
      onAuthentication={onAuthentication}
      authenticationConfig={_authenticationConfig}
    />
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.menuButton}>
            {drawerMenuComponent}
          </div>
          <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="inherit" className={classes.grow} noWrap>
            {blob ? blob.filepath : ''}
          </Typography>
          <div className={classes.grow} />
          {buttons}
          {repositoryMenuComponent}
          {userMenuComponent}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ApplicationBarComponent.propTypes = {
  /** The title string to be displayed. */
  title: PropTypes.string,
  /** Additional buttons to be displayed. */
  buttons: PropTypes.element,
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
  // ...withAuthentication.propTypes,
  // ...withRepository.propTypes,
};

export const ApplicationBar = withStyles(styles, { withTheme: true })(ApplicationBarComponent);
