import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { Organization } from '../';

function Organizations({
  url,
  organization = {},
  urls,
  organizations,
  onOrganization,
  config,
  messages: {
    primaryError = 'No organizations',
    secondaryError = 'Please provide valid organization objects or urls.',
  } = {},
}) {
  const updateOrganization = useCallback(
    (repo) => {
      onOrganization(repo);
    },
    [onOrganization]
  );

  let components = [];

  if (organizations && organizations.length > 0) {
    components = organizations.map((_organization) => (
      <Organization
        key={_organization.id}
        selected={organization && _organization.id === organization.id}
        organization={_organization}
        onOrganization={updateOrganization}
        config={config}
      />
    ));
  } else if (urls && urls.length > 0) {
    components = urls.map((_url, index) => (
      <Organization
        selected={_url === url}
        key={index}
        url={_url}
        onOrganization={updateOrganization}
        config={config}
      />
    ));
  } else {
    components = [
      <Organization
        config={config}
        messages={{ primaryError, secondaryError }}
      />,
    ];
  }
  return <List>{components}</List>;
}

Organizations.propTypes = {
  /** Url to get organization data, if organization data is not provided. */
  url: PropTypes.string,
  /** Urls array to get organization data, if organization data is not provided. */
  urls: PropTypes.array,
  /** Organizations data array to render, if urls not provided. */
  organizations: PropTypes.array,
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }),
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
};

export default Organizations;
