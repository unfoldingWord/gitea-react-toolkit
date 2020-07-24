import React, { useState, useCallback } from 'react';
import useEffect from 'use-deep-compare-effect';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  colors,
} from '@material-ui/core';
import { Code } from '@material-ui/icons';
import { get } from '../../core';

const useStyles = makeStyles((theme) => ({
  avatar: { borderRadius: '20%' },
  errorMessage: { color: colors.red[500] },
}));

function Organization({
  url = '',
  config = {},
  organization,
  onOrganization = () => {},
  selected,
  messages: {
    primaryLoading = 'Loading…',
    secondaryLoading = 'Attempting to load organization details…',

    primaryError = 'No organization',
    secondaryError = 'Please provide a valid organization object or url.',
  } = {},
}) {
  const classes = useStyles();
  const [org, setOrg] = useState(organization);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async ({ config: _config, url: _url }) => {
    const data = await get({ config: _config, url: _url });
    setOrg(data);
  }, []);

  useEffect(() => {
    if (url) {
      setLoading(true);
      getData({ config, url });
    } else if (organization) {
      setOrg(organization);
    }
    setLoading(false);
  }, [url, organization, config, getData]);

  const _onOrganization = useCallback(() => {
    onOrganization(org);
  }, [org, onOrganization]);

  const {
    avatar_url, description, full_name, username, website,
  } = org || {};

  const primary =
    full_name ||
    username ||
    (loading && primaryLoading) ||
    (!org && primaryError);
  const secondary =
    description || (loading && secondaryLoading) || (!org && secondaryError);
  return (
    <ListItem
      selected={selected}
      data-test='organization-item'
      alignItems='flex-start'
      button
      ContainerComponent='div'
      onClick={_onOrganization}
    >
      <ListItemAvatar>
        <Avatar
          alt={full_name || username}
          src={avatar_url}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={secondary}
        classes={{
          secondary:
            full_name == null && username == null && loading !== true
              ? classes.errorMessage
              : null,
        }}
      />
      {org && (
        <ListItemSecondaryAction>
          <IconButton
            aria-label='Open Link'
            onClick={() => {
              window.open(website, '_blank');
            }}
          >
            <Code />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

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
  config: PropTypes.shape({ server: PropTypes.string.isRequired }),
  /** The selected organization */
  selected: PropTypes.bool,
  messages: PropTypes.shape({
    primaryError: PropTypes.string,
    secondaryError: PropTypes.string,
    primaryLoading: PropTypes.string,
    secondaryLoading: PropTypes.string,
  }),
};

export default Organization;
