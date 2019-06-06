import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import {
  Note,
  Cancel,
} from '@material-ui/icons';

import { withRepository } from '../repository';
import { withBlob } from '../tree-blob';

import { humanFileSize } from './helpers';

function FileMenuComponent({
  blob,
}) {
  return (
    <List dense>
      <ListItem
        alignItems="flex-start"
        ContainerComponent="div"
        button
      >
        <ListItemIcon style={{ marginRight: 0 }}>
          <Note />
        </ListItemIcon>
        <ListItemText
          primary={blob.filepath}
          secondary={humanFileSize(blob.size)}
        />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Open Link"
            onClick={() => {
              blob.close()
            }}
          >
            <Cancel />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

FileMenuComponent.propTypes = {
  /** Blob data to render, if url not provided. */
  blob: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
}

export const FileMenu = withRepository(withBlob(FileMenuComponent));
