import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import { SearchForm } from './SearchForm';
import { Repositories } from './Repositories';

function SearchComponent({
  classes,
  defaultOwner,
  defaultQuery,
  onSelect,
}) {
  const [repositories, setRepositories] = useState([]);

  return (
    <div>
      <SearchForm
        defaultOwner={defaultOwner}
        defaultQuery={defaultQuery}
        onRepositories={setRepositories}
      />
      <Repositories
        repositories={repositories}
        onSelect={onSelect}
      />
    </div>
  );
}

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultOwner: PropTypes.string,
  defaultQuery: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

const styles = (theme) => ({
});

export const Search = withStyles(styles)(SearchComponent);
