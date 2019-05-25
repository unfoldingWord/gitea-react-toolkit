import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import {
  Search,
} from '@material-ui/icons';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import { FormInput } from '../authentication';

import { repositorySearch } from '../../core';

const repositorySearchDebounced = AwesomeDebouncePromise(repositorySearch, 250);

function SearchFormComponent({
  classes,
  defaultOwner,
  defaultQuery,
  onRepositories,
  config,
}) {
  const [owner, setOwner] = useState(defaultOwner);
  const [query, setQuery] = useState(defaultQuery);
  const [initialSearch, setInitialSearch] = useState(false);

  const updateRepositories = async (owner, query) => {
    const repositories = await repositorySearchDebounced({owner, query, config});
    onRepositories(repositories);
  }

  if (!initialSearch) {
    updateRepositories(owner, query)
    .then(()=> setInitialSearch(true) );
  }

  const onOwner = (_owner) => {
    setOwner(_owner);
    updateRepositories(_owner, query);
  }

  const onQuery = (_query) => {
    setQuery(_query);
    updateRepositories(owner, _query);
  }

  return (
    <ListItem
      ContainerComponent="div"
      className={classes.root}
    >
      <ListItemIcon className={classes.listItemIcon}>
        <IconButton
          onClick={() => updateRepositories(owner, query)}
        >
          <Search />
        </IconButton>
      </ListItemIcon>
      <form className={classes.form}>
        <div className={classes.input}>
          <FormInput
            id='owner' label='Owner' type='text'
            defaultValue={owner}  autoComplete={undefined}
            onChange={(event) => {onOwner(event.target.value)}}
          />
        </div>
        <div className={classes.input}>
          <FormInput
            id='search' label='Search' type='text'
            defaultValue={query} autoFocus  autoComplete={undefined}
            onChange={(event) => {onQuery(event.target.value)}}
          />
        </div>
      </form>
    </ListItem>
  );
}

SearchFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Prefill the owner search field. */
  defaultOwner: PropTypes.string,
  /** Prefill the query search field. */
  defaultQuery: PropTypes.string,
  /** Function to propogate the returned repositories data array. */
  onRepositories: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = (theme) => ({
  root: {
    position: 'sticky',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
  },
  listItemIcon: {
    marginRight: '8px',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '40%',
    display: 'inline-block',
    marginRight: '1em',
  }
});

export const SearchForm = withStyles(styles)(SearchFormComponent);
