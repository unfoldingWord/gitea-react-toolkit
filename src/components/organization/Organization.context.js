import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthenticationContext , useOrganization } from '../..';

export const OrganizationContext = React.createContext();

export function OrganizationContextProvider({
  organization,
  organizations,
  urls,
  config: _config,
  onOrganization,
  children,
  authentication: _authentication,
}) {
  const { state: contextAuthentication, config: contextConfig } = useContext(AuthenticationContext);
  const {
    state, actions, component, config, components,
  } = useOrganization({
    organizations, config: _config || contextConfig,
    urls, authentication: _authentication || contextAuthentication,
    organization, onOrganization,
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
  /** Urls array to get organization data, if organization data is not provided. */
  urls: PropTypes.array,
  /** Organizations data array to render, if urls not provided. */
  organizations: PropTypes.array,
  /** Configuration to pass through to the Search/Organizations component. */
  config: PropTypes.shape({
    /** Configuration required for Search or Organizations if paths are provided as URL. */
    server: PropTypes.string,
  }),
  /** Children to render inside of Provider */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
};
