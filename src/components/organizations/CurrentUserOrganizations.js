import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';

import { Organizations } from '../';
import { getCurrentUserOrgs } from '../../core';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    height: '100%',
  },
}));

function CurrentUserOrganizations({
  onOrganization,
  authentication,
  organization,
  messages: {
    primaryError = 'No Organizations',
    secondaryError = 'You are not currently a member of any organizations.',
  } = {},
}) {
  const classes = useStyles();
  const [organizations, setOrganizations] = useState([]);
  const getData = useCallback(async () => {
    if (authentication && authentication.config) {
      const userOrgs = await getCurrentUserOrgs({
        config: authentication.config,
      });

      if (userOrgs) {
        setOrganizations(userOrgs);
      }
    }
  }, [authentication]);

  useEffect(() => {
    if (authentication) {
      getData();
    }
  }, [authentication, getData]);
  return authentication ? (
    <List className={classes.root}>
      <Organizations
        organization={organization}
        organizations={organizations}
        onOrganization={onOrganization}
        config={authentication.config}
        messages={{ primaryError, secondaryError }}
      />
    </List>
  ) : (
    <div />
  );
}

CurrentUserOrganizations.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }).isRequired,
  /** The currently selected organization */
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
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }).isRequired,
};

export default CurrentUserOrganizations;
