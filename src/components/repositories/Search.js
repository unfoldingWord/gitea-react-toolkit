import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider,
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import { SearchForm } from './SearchForm';
import { Repositories } from './Repositories';

function SearchComponent({
  classes,
  defaultOwner,
  defaultQuery,
  onRepository,
  config,
}) {
  const [repositories, setRepositories] = useState([]);

  return (
    <div>
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
    </div>
  );
}

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
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

const styles = (theme) => ({
});

export const Search = withStyles(styles)(SearchComponent);
