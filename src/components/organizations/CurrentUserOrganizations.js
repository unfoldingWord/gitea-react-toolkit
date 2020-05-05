import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

import { Organizations, useAuthentication } from '../';
import { getCurrentUserOrgs } from '../../core';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
    height: '100%',
  },
}));

function CurrentUserOrganizations({
  onOrganization,
  config,
}) {
  const classes = useStyles();
  const [organizations, setOrganizations] = useState([]);
  const [authentication, setAuthentication] = useState(null);
  const { component: authenticationComponent } = useAuthentication({ config, onAuthentication: setAuthentication });
  const getData = useCallback(async () => {
    if (authentication && authentication.config) {
      const userOrgs = await getCurrentUserOrgs({ config: { ...config, ...authentication.config } });
      setOrganizations(userOrgs);
    }
  }, [authentication, config]);

  useEffect(() => {
    if (config && authentication) {
      getData();
    }
  }, [config, authentication, getData]);

  return !authentication ? authenticationComponent : (
    <List className={classes.root}>
      <Organizations
        organizations={organizations}
        onOrganization={onOrganization}
        config={config}
      />
    </List>
  );
}

CurrentUserOrganizations.propTypes = {
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }).isRequired,
};

export default CurrentUserOrganizations;
