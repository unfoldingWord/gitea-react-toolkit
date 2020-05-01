import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Code } from '@material-ui/icons';

import { get } from '../../core';

const useStyles = makeStyles(theme => ({
  avatar: { borderRadius: '20%' },
}));

function Organization({
  url,
  organization,
  onOrganization,
  config,
}) {
  const classes = useStyles();
  const [repo, setRepo] = useState(organization);

  const getData = useCallback(async () => {
    const data = await get({ url, config });
    setRepo(data);
  }, [config, url]);

  const _onOrganization = useCallback(() => {
    onOrganization(repo);
  }, [repo, onOrganization]);

  const {
    avatar_url,
    description,
    full_name,
  } = repo;

  return (
    <ListItem
      data-test="organization-item"
      alignItems="flex-start"
      button
      ContainerComponent="div"
      onClick={_onOrganization}
    >
      <ListItemAvatar>
        <Avatar
          alt={full_name}
          src={avatar_url}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={full_name}
        secondary={description}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Open Link"
          onClick={() => {
            window.open(website, '_blank');
          }}
        >
          <Code />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Organization.propTypes = {
  /** Organization data to render, if url not provided. */
  organization: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Url to get organization data, if organization data is not provided. */
  url: PropTypes.string,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
};

export default Organization;
