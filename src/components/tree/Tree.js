import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  Collapse,
} from '@material-ui/core';

import { BlobObject } from '../blob-object';
import { TreeObject } from '../tree-object';

import { fetchTree } from './helpers';

/**
 * A Listing Component to render an array of Git Tree objects.
 */
function TreeComponent ({
  classes,
  tree,
  url,
  selected,
  depth,
}) {
  const [_tree, setTree] = useState(tree || []);
  const [selectedIndex, setSelectedIndex] = useState();

  const updateTree = async () => {
    const __tree = await fetchTree({url});
    setTree(__tree);
  };

  const emptyTree = (!_tree || _tree.length === 0)
  if (selected && emptyTree) {
    updateTree();
  }

  const updateSelectedIndex = (index) => {
    setSelectedIndex(index);
  }

  let components = [];
  if (_tree) {
    components = _tree.map((object, index) => {
      let component;
      if (object.type === 'tree') {
        component = (
          <TreeObject
            {...object}
            selected={index === selectedIndex}
            depth={depth}
          />
        );
      } else if (object.type === 'blob') {
        component = (
          <BlobObject
            {...object}
            selected={index === selectedIndex}
            depth={depth}
          />
        );
      }
      return (
        <div
          key={index}
          onClick={()=> updateSelectedIndex(index)}
        >
          {component}
        </div>
      );
    });
  }

  return (
    <Collapse in={selected} timeout="auto" unmountOnExit>
      <List dense className={classes.list}>
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
    type: PropTypes.oneOf(['tree','blob']).isRequired,
  })),
  /** The Url to fetch the listing if listing is not provided. */
  url: PropTypes.string,
  /** Set if the Listing is currently selected, which will expand the collapsed view. */
  selected: PropTypes.bool,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
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
