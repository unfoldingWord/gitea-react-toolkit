import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useOrganization, AuthenticationContext } from '../..';

export const OrganizationContext = React.createContext();

export function OrganizationContextProvider({
  full_name,
  urls,
  config: _config,
  authentication: _authentication,
  organization,
  onOrganization,
  branch,
  children,
}) {
  const { state: contextAuthentication, config: contextConfig } = useContext(AuthenticationContext);
  const {
    state, actions, component, components, config,
  } = useOrganization({
    full_name, repositories, urls,
    config: _config || contextConfig,
    authentication: _authentication || contextAuthentication,
    organization, branch, onOrganization,
  });

  const context = {
    state,
    actions,
    component,
    components,
    config,
  };

  return (
    <OrganizationContext.Provider value={context}>
      {children}
    </OrganizationContext.Provider>
  );
};

OrganizationContextProvider.propTypes = {
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
  /** Urls array to get organization data, if organization data is not provided. */
  urls: PropTypes.array,
  /** Organizations data array to render, if urls not provided. */
  branch: PropTypes.string,
  /** Configuration to pass through to the Search/Organization component. */
  config: PropTypes.shape({
    /** Configuration required for Search or Organization if paths are provided as URL. */
    server: PropTypes.string,
  }),
  /** Children to render inside of Provider */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
