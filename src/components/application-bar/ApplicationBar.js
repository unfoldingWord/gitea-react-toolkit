import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

// import { withAuthentication, withRepository, withFile } from '../';
import { useStyles } from './useStyles';
import {
  UserMenu, DrawerMenu, RepositoryMenu, FileContext,
} from '..';

function ApplicationBar({
  title,
  buttons,
  drawerMenu,
}) {
  const classes = useStyles();
  const { state: file } = useContext(FileContext)

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}>
        <Toolbar data-test="application-bar">
          <div className={classes.menuButton}>
            <DrawerMenu>
              {drawerMenu}
            </DrawerMenu>
          </div>
          <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="inherit" className={classes.grow} noWrap>
            {file ? file.filepath : ''}
          </Typography>
          <div className={classes.grow} />
          {buttons}
          <RepositoryMenu />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ApplicationBar.propTypes = {
  /** The title string to be displayed. */
  title: PropTypes.string,
  /** Additional buttons to be displayed. */
  buttons: PropTypes.element,
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
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
  /** Configuration required if paths are provided as URL. */
  repositoryConfig: PropTypes.shape({
    /** Urls array to get repository data, if repository data is not provided. */
    urls: PropTypes.array,
    /** Repositories data array to render, if urls not provided. */
    repositories: PropTypes.array,
    /** Prefill the owner search field. */
    defaultOwner: PropTypes.string,
    /** Prefill the query search field. */
    defaultQuery: PropTypes.string,
  }),
  /** Blob data to render, if url not provided. */
  file: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
  /** Function to propogate when the Blob is selected. */
  onFile: PropTypes.func,
  /** Configuration for authentication to work, server and tokenid are required. */
  config: PropTypes.shape({
    /** The Gitea server to use when authenticating. */
    server: PropTypes.string.isRequired,
  }).isRequired,
};

export default ApplicationBar;
