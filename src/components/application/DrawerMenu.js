import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  IconButton,
  Drawer,
  Divider,
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft,
} from '@material-ui/icons';

import styles from './styles';

import { Tree } from '../';

function DrawerMenuComponent({
  classes,
  drawerMenu,
  blob,
  onBlob,
  repository,
  config,
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  let fileTree = <div />;
  if (repository) {
    fileTree = (
      <Tree
        url={repository.tree_url}
        blob={blob}
        onBlob={onBlob}
        config={config}
        selected={true}
      />
    );
  }

  return (
    <div>
      <IconButton color="inherit" aria-label="Menu"
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary" anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        {drawerMenu}
        <Divider />
        {fileTree}
        <Divider />
      </Drawer>
    </div>
  );
}

DrawerMenuComponent.propTypes = {
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
};

export const DrawerMenu = withStyles(styles)(DrawerMenuComponent);
