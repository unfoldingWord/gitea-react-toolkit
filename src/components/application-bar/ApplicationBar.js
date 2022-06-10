import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import { useStyles } from './useStyles';
import {
  UserMenu, DrawerMenu, RepositoryMenu,
} from '..';

function ApplicationBar({
  title,
  build,
  buttons,
  filepath,
  drawerMenu,
  drawerMenuProps,
  hideRepositoryMenu,
  auth,
  repo,
  file,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}>
        <Toolbar data-test="application-bar">
          <div className={classes.menuButton}>
            <DrawerMenu {...drawerMenuProps} file={file}>
              {drawerMenu}
            </DrawerMenu>
          </div>
          <Typography variant="h6" color="inherit" data-test={title} className={classes.grow} noWrap>
            {title}
            {build && <Typography variant="caption" color="inherit" data-test={build} > build {build}</Typography>}
          </Typography>
          <Typography variant="subtitle2" color="inherit" data-test={file} className={classes.grow} noWrap>
            {file ? file.filepath : ''}
          </Typography>
          <div className={classes.grow} />
          {buttons}
          {!hideRepositoryMenu ? <RepositoryMenu repo={repo} /> : null}
          <UserMenu auth={auth} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ApplicationBar.defaultProps = {
  drawerMenuProps: {},
  hideRepositoryMenu: false,
};

ApplicationBar.propTypes = {
  /** The title string or jsx to be displayed. */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Additional buttons to be displayed. */
  buttons: PropTypes.element,
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
  /** Drawer menu props. */
  drawerMenuProps: PropTypes.object,
};

export default ApplicationBar;
