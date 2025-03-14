import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, CircularProgress, Typography,
} from '@material-ui/core';

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
  const [loading, setLoading] = useState(false);
  const [organizations, setOrganizations] = useState(null);
  const getData = useCallback(async () => {
    if (authentication && authentication.config) {
      const userOrgs = await getCurrentUserOrgs({ config: authentication.config });

      if (userOrgs) {
        setOrganizations(userOrgs);
      } else {
        setOrganizations([]);
      }
    }
  }, [authentication]);

  useEffect(() => {
    if (authentication) {
      setLoading(true);
      getData().finally(() => {
        setLoading(false);
      });
    }
  }, [authentication, getData]);
  return (authentication && (organization || (organizations && organizations.length > 0))) ? (
    <List className={classes.root}>
      <Organizations
        organization={organization}
        organizations={organizations}
        onOrganization={onOrganization}
        config={authentication.config}
        messages={{ primaryError, secondaryError }}
      />
    </List>
  ) : !loading && (!organizations || organizations.length == 0) ? (
    <Typography data-test="login-error-text" component="p" style={{ color: 'red' }}>
      No organizations found for this account
    </Typography>
  )
      : loading && (
        <center>
          <CircularProgress />
        </center>
      );
}

CurrentUserOrganizations.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
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
  config: PropTypes.shape({ server: PropTypes.string.isRequired }),
  messages: PropTypes.shape({
    primaryError: PropTypes.string,
    secondaryError: PropTypes.string,
  }),
};

export default CurrentUserOrganizations;
