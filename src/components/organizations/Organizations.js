import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import { Organization } from '../';

function Organizations({
  urls,
  organizations,
  onOrganization,
  config,
}) {
  const updateOrganization = useCallback((repo) => {
    onOrganization(repo);
  }, [onOrganization]);

  let components = [];

  if (organizations) {
    components = organizations.map((organization) =>
      <Organization
        key={JSON.stringify(organization)}
        organization={organization}
        onOrganization={updateOrganization}
        config={config}
      />
    );
  } else if (urls) {
    components = urls.map((url, index) =>
      <Organization
        key={index}
        url={url}
        onOrganization={updateOrganization}
        config={config}
      />
    );
  }
  return (
    <List>
      {components}
    </List>
  );
}

Organizations.propTypes = {
  /** Urls array to get organization data, if organization data is not provided. */
  urls: PropTypes.array,
  /** Organizations data array to render, if urls not provided. */
  organizations: PropTypes.array,
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }),
};

export default Organizations;
