import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Organization, CurrentUserOrganizations } from '../..';
import { getCurrentUserOrgs } from '../../core';

function useOrganization({
  organization,
  config,
  onOrganization,
  authentication,
}) {
  const update = useCallback((_organization) => {
    onOrganization(_organization);
  }, [onOrganization]);

  const list = useCallback(async () => {
    const _organizations = await getCurrentUserOrgs({ config });
    return _organizations;
  }, [config]);

  const close = useCallback(() => {
    update();
  }, [update]);

  const components = {
    view: <Organization config={config || authentication.config} organization={organization} onOrganization={update} />,
    list: <CurrentUserOrganizations config={config || authentication.config} organization={organization} onOrganization={update} />,
  };

  const component = organization ? components.view : components.list;

  return {
    state: organization,
    actions: {
      update,
      list,
      close,
    },
    component,
    components,
    config,
    authentication,
  };
};

useOrganization.propTypes = {
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
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Organizations data array to render, if urls not provided. */
  organizations: PropTypes.array,
  /** Configuration to pass through to the Search/Organizations component. */
  config: PropTypes.shape({
    /** Configuration required for Search or Organizations if paths are provided as URL. */
    server: PropTypes.string,
  }).isRequired,
};

export default useOrganization;
