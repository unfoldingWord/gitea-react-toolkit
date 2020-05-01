import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
} from '@material-ui/core';

import { Organizations, AuthenticationContextProvider } from '../';
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
  const [repositories, setOrganizations] = useState([]);
  const [authentication, setAuthentication] = useState(null);
  const getData = useCallback(async () => {
    debugger;
    const userOrgs = await getCurrentUserOrgs({ ...config, ...authentication });
    setOrganizations(userOrgs);
  }, [config, authentication])
  useEffect(() => {
    if (config && authentication) {
      getData();
    }
  }, [config, authentication])

  return (
    <List className={classes.root}>
      <AuthenticationContextProvider
        config={config}
        authentication={authentication}
        onAuthentication={setAuthentication}>
        <Repositories
          repositories={repositories}
          onOrganization={onOrganization}
          config={config}
        />
      </AuthenticationContextProvider>
    </List>
  );
}

CurrentUserOrganizations.propTypes = {
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrentUserOrganizations;
