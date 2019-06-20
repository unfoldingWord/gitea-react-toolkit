import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
} from '@material-ui/core';

import { Repository } from '../';
import { extendRepository } from '../repository/helpers';

function RepositoriesComponent({
  classes,
  urls,
  repositories,
  onRepository,
  config,
}) {
  const updateRepository = (_repo) => {
    let __repo;
    if (_repo) {
      __repo = {..._repo};
      __repo = extendRepository({repository: __repo, updateRepository, config});
    }
    onRepository(__repo);
  };

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
    <List className={classes.root}>
      {components}
    </List>
  );
}

RepositoriesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
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

const styles = {
  root: {
  },
};

export const Repositories = withStyles(styles)(RepositoriesComponent);
