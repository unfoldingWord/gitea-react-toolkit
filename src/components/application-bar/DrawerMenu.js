import React, { useState } from 'react';
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
import { useFile } from '..';

function DrawerMenu({
  drawerMenu,
  file: _file,
  onFile,
  repository,
  authentication,
  config,
}) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    state: file, actions, component: fileComponent,
  } = useFile({
    authentication, repository, file: _file, onFile, config,
  });

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
        {drawerMenu}
        <Divider />
        {fileComponent}
        <Divider />
      </Drawer>
    </div>
  );
}

DrawerMenu.propTypes = {
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
  /** File data to render, if url not provided. */
  file: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
  /** Function to propogate when the File is selected. */
  onFile: PropTypes.func,
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
  /** Configuration */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
};

export default DrawerMenu;
