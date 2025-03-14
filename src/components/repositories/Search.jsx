import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  Divider,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import { Repositories, SearchForm } from '.';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
    height: '100%',
  },
}));

function Search({
  defaultOwner,
  defaultQuery,
  onRepository,
  config,
}) {
  const classes = useStyles();
  const [repositories, setRepositories] = useState([]);

  return (
    <List className={classes.root}>
      <SearchForm
        defaultOwner={defaultOwner}
        defaultQuery={defaultQuery}
        onRepositories={setRepositories}
        config={config}
      />
      <Divider />
      <Repositories
        repositories={repositories}
        onRepository={onRepository}
        config={config}
      />
    </List>
  );
}

Search.propTypes = {
  /** Prefill the owner search field. */
  defaultOwner: PropTypes.string,
  /** Prefill the query search field. */
  defaultQuery: PropTypes.string,
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }).isRequired,
};

export default Search;
