import React, { useState, useContext } from 'react';
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

import { useStyles } from './useStyles';
import { FileContext } from '..';

function DrawerMenu({
  children,
}) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { components } = useContext(FileContext) || {};

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
        {children}
        <Divider />
        {components && components.browse}
        <Divider />
      </Drawer>
    </div>
  );
}

DrawerMenu.propTypes = {
  /** Component to render inside of the drawer menu. */
  children: PropTypes.element,
};

export default DrawerMenu;
