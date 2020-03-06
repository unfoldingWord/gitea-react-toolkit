import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Repository, useRepository } from '..';

function withRepository(Component) {
  function RepositoryComponent({
    repositoryConfig: {
      urls,
      repositories,
      defaultOwner,
      defaultQuery,
    }={},
    config,
    authentication,
    branch,
    repository: incomingRepository,
    onRepository,
    ...props
  }) {
    const { state, actions, component } = useRepository({
      authentication, repositories, urls, defaultOwner, defaultQuery, config, branch, repository: incomingRepository,
    });
    const _incoming = incomingRepository && JSON.stringify(incomingRepository);
    const _state = state && actions && JSON.stringify({ ...state, ...actions });

    const _onRepository = useCallback(() => {
      if (onRepository && state && actions) onRepository({ ...state, ...actions });
    }, [onRepository, state, actions]);

    const _update = useCallback(() => {
      actions.update(incomingRepository);
    }, [actions, incomingRepository]);

    useEffect(() => {
      if (_incoming !== _state) _onRepository();
    }, [_onRepository, _incoming, _state]);

    useEffect(() => {
      if (_incoming && _incoming !== _state) _update();
    }, [_update, _incoming, _state]);

    const repository = incomingRepository || (state && { ...state, ...actions });

    const _props = { ...props, authentication, config, repository };

    console.log('withRepository');

    return (!repository) ? component : <Component {..._props} />;
  };

  RepositoryComponent.propTypes = {
    /** Configuration to pass through to the Search/Repositories component. */
    repositoryConfig: PropTypes.shape({
      /** Urls array to get repository data, if repository data is not provided. */
      urls: PropTypes.array,
      /** Repositories data array to render, if urls not provided. */
      repositories: PropTypes.array,
      /** Prefill the owner search field. */
      defaultOwner: PropTypes.string,
      /** Prefill the query search field. */
      defaultQuery: PropTypes.string,
      /** Configuration required for Search or Repositories if paths are provided as URL. */
      server: PropTypes.string,
    }).isRequired,
    ...Repository.propTypes,
  };

  return RepositoryComponent;
};

export default withRepository;
