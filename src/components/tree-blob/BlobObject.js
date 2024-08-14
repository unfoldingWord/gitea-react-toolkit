import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Note,
  NoteOutlined,
} from '@material-ui/icons';

import { humanFileSize } from './helpers';
const Path = require('path');

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: '0.7em',
  },
  pathText: {
    paddingLeft: '0.7em',
  }
}));

/**
 * A Blob Component to render a Git Tree blob object.
 */
function BlobObject({
  selected,
  blob,
  blob: {
    path,
    size,
  },
  onBlob,
  depth,
  filepath,
}) {
  const classes = useStyles();
  const _filepath = Path.join(filepath || '', path);
  const _blob = { ...blob, filepath: _filepath };

  const icon = selected ?
    <Note /> :
    <NoteOutlined />;

  return (
    <ListItem
      button
      selected={selected}
      className={classes.root}
      style={{ paddingLeft: depth + 'em' }}
      onClick={() => {
        if (onBlob) { onBlob(_blob); }
      }}
    >
      <ListItemIcon style={{ marginRight: 0 }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        className={classes.pathText}
        primary={path}
        secondary={humanFileSize(size)}
      />
    </ListItem>
  );
}

BlobObject.propTypes = {
  /** Blob data to render, if url not provided. */
  blob: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
  /** Set whether or not the File object is currently selected. */
  selected: PropTypes.bool,
  /** Function to propogate when the Blob is selected. */
  onBlob: PropTypes.func,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
  /** The nested filepath that will concatenate. */
  filepath: PropTypes.string,
};

BlobObject.defaultProps = {
  selected: false,
  depth: 1,
};

export default BlobObject;
