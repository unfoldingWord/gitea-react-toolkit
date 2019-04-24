import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import {
  Code,
} from '@material-ui/icons';

import { get } from '../../core/git-https/gitFile';

function RepositoryComponent({
  classes,
  onSelect,
  url,
  repository,
  config,
}) {
  const [data, setData] = useState(repository || {owner: {}});

  const getData = async () => {
    const _data = await get({url, config});
    setData(_data);
  }

  if (Object.keys(data.owner).length === 0) {
    getData();
  }

  const {
    owner,
    name,
    full_name,
    description,
    html_url,
  } = data;

  return (
    <ListItem
      alignItems="flex-start"
      button
      ContainerComponent="div"
      onClick={() => onSelect(data)}
    >
      <ListItemAvatar>
        <Avatar
          alt={owner.fullname}
          src={owner.avatar_url}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={full_name || name}
        secondary={description}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Open Link"
          onClick={() => {
            window.open(html_url,'_blank');
          }}
        >
          <Code />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

RepositoryComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  url: PropTypes.string,
  repository: PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  avatar: {
    borderRadius: '20%',
  },
};

export const Repository = withStyles(styles)(RepositoryComponent);
