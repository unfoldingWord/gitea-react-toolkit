import React from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Folder,
  FolderOpen,
} from '@material-ui/icons';

import { Tree } from '../tree';

/**
 * A TreeObject Component to render a Git Tree tree object.
 */
function TreeObjectComponent ({
  classes,
  path,
  tree,
  url,
  selected,
  pathSelected,
  onBlob,
  depth,
  filepath,
}) {
  const _filepath = Path.join(filepath || '', path);

  const icon = selected ?
    <Folder /> :
    <FolderOpen />;

  return (
    <>
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
          primary={path + '/'}
        />
      </ListItem>
      <Tree
        pathSelected={pathSelected}
        tree={tree}
        url={url}
        selected={selected}
        onBlob={onBlob}
        depth={depth + 1}
        filepath={_filepath}
      />
    </>
  );
}

TreeObjectComponent.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The filename or path in the Git Tree Object */
  path: PropTypes.string.isRequired,
  /** An array of paths from the Gitea file tree api. */
  tree: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['tree','blob']).isRequired,
  })),
  /** The Url to fetch the listing if listing is not provided. */
  url: PropTypes.string,
  /** Set whether or not the File object is currently selected. */
  selected: PropTypes.bool,
  /** Set which of the File object is currently selected. */
  pathSelected: PropTypes.string,
  /** Function to propogate when the Blob is selected. */
  onBlob: PropTypes.func,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
  /** The nested filepath that will concatenate. */
  filepath: PropTypes.string,
};

TreeObjectComponent.defaultProps = {
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

export const TreeObject = withStyles(styles)(TreeObjectComponent);
