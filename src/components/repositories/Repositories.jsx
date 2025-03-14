import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import { Repository } from '../';

function Repositories({
  urls,
  repositories,
  onRepository,
  config,
}) {
  const updateRepository = useCallback((repo) => {
    onRepository(repo);
  }, [onRepository]);

  let components = [];

  if (repositories) {
    components = repositories.map((repository) =>
      <Repository
        key={JSON.stringify(repository)}
        repository={repository}
        onRepository={updateRepository}
        config={config}
      />
    );
  } else if (urls) {
    components = urls.map((url, index) =>
      <Repository
        key={index}
        url={url}
        onRepository={updateRepository}
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

Repositories.propTypes = {
  /** Urls array to get repository data, if repository data is not provided. */
  urls: PropTypes.array,
  /** Repositories data array to render, if urls not provided. */
  repositories: PropTypes.array,
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
};

export default Repositories;
