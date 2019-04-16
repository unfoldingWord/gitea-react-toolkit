import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Note,
  NoteOutlined,
} from '@material-ui/icons';

/**
 * A Blob Component to render a Git Tree blob object.
 */
function BlobObjectComponent ({
  classes,
  path,
  selected,
  depth,
}) {

  const icon = selected ?
    <Note fontSize="small" /> :
    <NoteOutlined fontSize="small" />;

  return (
    <ListItem
      button
      selected={selected}
      className={classes.root}
      style={{paddingLeft: depth + 'em'}}
    >
      <ListItemIcon style={{ marginRight: 0 }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        className={classes.pathText}
        primary={path}
      />
    </ListItem>
  );
}

BlobObjectComponent.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The filename or path in the Git Tree Object */
  path: PropTypes.string.isRequired,
  /** Set whether or not the File object is currently selected. */
  selected: PropTypes.bool,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
};

BlobObjectComponent.defaultProps = {
  selected: false,
  depth: 1,
};

const styles = theme => ({
  root: {
    paddingRight: '0.7em',
  },
  pathText: {
    paddingLeft: '0.7em',
  }
});

export const BlobObject = withStyles(styles)(BlobObjectComponent);
