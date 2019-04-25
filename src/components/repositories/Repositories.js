import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
} from '@material-ui/core';

import { Repository } from './Repository';

function RepositoriesComponent({
  classes,
  onSelect,
  urls,
  repositories,
  config,
}) {
  let components = [];
  if (repositories) {
    components = repositories.map((repository) =>
      <Repository
        key={JSON.stringify(repository)}
        repository={repository}
        onSelect={(data) => onSelect(data)}
        config={config}
      />
    );
  } else if (urls) {
    components = urls.map((url, index) =>
      <Repository
        key={index}
        url={url}
        onSelect={(data) => onSelect(data)}
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
  /** Function to call when repository is selected. */
  onSelect: PropTypes.func.isRequired,
  /** Urls array to get repository data, if repository data is not provided. */
  urls: PropTypes.array,
  /** Repositories data array to render, if urls not provided. */
  repositories: PropTypes.array,
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
