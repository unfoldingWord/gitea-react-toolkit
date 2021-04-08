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
  UserMenu, DrawerMenu, RepositoryMenu, FileContext,
} from '..';

function ApplicationBar({
  title,
  build,
  buttons,
  drawerMenu,
  drawerMenuProps,
  hideRepositoryMenu,
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
            <DrawerMenu {...drawerMenuProps}>
              {drawerMenu}
            </DrawerMenu>
          </div>
          <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
            {title}
            {build && <Typography variant="caption" color="inherit" > build {build}</Typography>}
          </Typography>
          <Typography variant="subtitle2" color="inherit" className={classes.grow} noWrap>
            {file ? file.filepath : ''}
          </Typography>
          <div className={classes.grow} />
          {buttons}
          {!hideRepositoryMenu ? <RepositoryMenu /> : null}
          <UserMenu />
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
