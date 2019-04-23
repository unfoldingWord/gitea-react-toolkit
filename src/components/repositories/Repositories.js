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
}) {
  let components = [];
  if (repositories) {
    components = repositories.map((repository, index) =>
      <Repository
        key={index}
        repository={repository}
        onSelect={(data) => onSelect(data)}
      />
    );
  } else if (urls) {
    components = urls.map((url, index) =>
      <Repository
        key={index}
        url={url}
        onSelect={(data) => onSelect(data)}
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
  onSelect: PropTypes.func.isRequired,
  urls: PropTypes.array,
  repositories: PropTypes.array,
};

const styles = {
  root: {
  },
};

export const Repositories = withStyles(styles)(RepositoriesComponent);
