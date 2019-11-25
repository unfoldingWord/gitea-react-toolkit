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

import { Tree } from '../';
import styles from './styles';


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
  };

  const fileTree = (!repository) ? <></> : (
    <Tree
      url={repository.tree_url}
      blob={blob}
      onBlob={onBlob}
      config={config}
      selected={true}
    />
  );

  const drawerClasses = { paper: classes.drawerPaper };
  return (
    <div>
      <IconButton data-test="drawer-menu-button" color="inherit" aria-label="Menu" onClick={toggleDrawer} >
        <Menu />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary" anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        classes={drawerClasses}>
        <div className={classes.drawerHeader}>
          <IconButton data-test="drawer-menu-close-button" onClick={toggleDrawer}>
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

const areEqual = (prevProps, nextProps) => {
  const keys = ['blob', 'repository', 'config'];
  const checks = keys.map(key => (JSON.stringify(prevProps[key]) === JSON.stringify(nextProps[key])));
  const equal = !checks.includes(false);
  console.log('DrawerMenuComponent', keys, checks, equal);
  return equal;
};

export const DrawerMenu = React.memo(withStyles(styles)(DrawerMenuComponent), areEqual);
