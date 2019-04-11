import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Note,
  NoteOutlined,
  Folder,
  FolderOpen,
} from '@material-ui/icons';

export function File ({
  classes,
  path,
  type,
  selected,
  depth,
}) {
  const folderIcon = selected ? <Folder fontSize="small" /> : <FolderOpen fontSize="small" />;
  const fileIcon = selected ? <Note fontSize="small" /> : <NoteOutlined fontSize="small" />;
  const icon = (type === 'tree') ? folderIcon : fileIcon;

  const _path = (type === 'tree') ? path + '/' : path;

  return (
    <ListItem
      button
      selected={selected}
      style={{
        paddingLeft: depth + 'em',
        paddingRight: '0.7em',
      }}
    >
      <ListItemIcon style={{ marginRight: 0 }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        style={{ paddingLeft: '0.7em' }}
        primary={_path}
      />
    </ListItem>
  );
}

File.propTypes = {
  classes: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tree', 'blob']),
  depth: PropTypes.number,
};

File.defaultProps = {
  type: 'blob',
  depth: 1,
};
