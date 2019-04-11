import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  Collapse,
} from '@material-ui/core';

import {File} from '../file';

function Folder ({
  classes,
  paths,
  depth,
}) {

  const files = paths.map(({path, type}, index) =>
    <File
      key={index}
      path={path}
      type={type}
      depth={depth}
    />
  );

  return (
    <Collapse in={true} timeout="auto" unmountOnExit>
      <List dense className={classes.list}>
        {files}
      </List>
    </Collapse>
  )
}

Folder.propTypes = {
  classes: PropTypes.object.isRequired,
  /** An array of paths from the Gitea file tree api. */
  paths: PropTypes.array.isRequired,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number.isRequired,
}

const styles = theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default withStyles(styles)(Folder);
