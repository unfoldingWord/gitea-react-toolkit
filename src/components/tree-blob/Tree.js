import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  Collapse,
} from '@material-ui/core';

import { BlobObject } from './BlobObject';
import { TreeObject } from './TreeObject';

import { fetchTree } from './helpers';

/**
 * A Listing Component to render an array of Git Tree objects.
 */
function TreeComponent({
  classes,
  tree,
  url,
  config,
  selected,
  blob,
  onBlob,
  depth,
  filepath,
}) {
  const [_tree, setTree] = useState(tree || []);
  let _selectedPath;
  if (blob) {
    _selectedPath = blob.filepath.split('/')[depth - 2];
  }
  const [selectedPath, setSelectedPath] = useState(_selectedPath);

  const updateTree = async () => {
    const __tree = await fetchTree({ url, config });
    setTree(__tree);
  };

  const emptyTree = (!_tree || _tree.length === 0);
  if (selected && emptyTree) {
    updateTree();
  }

  let components = [];
  if (_tree) {
    components = _tree.map((object, index) => {
      const _selected = (object.path === selectedPath);
      let component;
      if (object.type === 'tree') {
        component = (
          <TreeObject
            {...object}
            selected={_selected}
            depth={depth}
            onBlob={onBlob}
            filepath={filepath}
          />
        );
      } else if (object.type === 'blob') {
        component = (
          <BlobObject
            blob={object}
            onBlob={onBlob}
            selected={_selected}
            depth={depth}
            filepath={filepath}
          />
        );
      }
      const onSelectedPath = () => setSelectedPath(object.path);
      return (
        <div
          key={index}
          onClick={onSelectedPath}
        >
          {component}
        </div>
      );
    });
  }

  return (
    <Collapse in={selected} timeout="auto" unmountOnExit>
      <List data-test="file-tree" dense className={classes.list}>
        {components}
      </List>
    </Collapse>
  );
}

TreeComponent.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** An array of paths from the Gitea file tree api. */
  tree: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['tree', 'blob']).isRequired,
  })),
  /** The Url to fetch the listing if listing is not provided. */
  url: PropTypes.string,
  /** If url is relative, pass the server in the config object. */
  config: PropTypes.shape({
    server: PropTypes.string,
  }),
  /** Set if the Listing is currently selected, which will expand the collapsed view. */
  selected: PropTypes.bool,
  /** Function to propogate when the Blob is selected. */
  onBlob: PropTypes.func,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
  /** The nested filepath that will concatenate. */
  filepath: PropTypes.string,
}

TreeComponent.defaultProps = {
  selected: false,
  depth: 1,
}

const styles = theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export const Tree = withStyles(styles)(TreeComponent);
