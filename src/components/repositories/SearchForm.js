import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  InputBase,
  IconButton,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import {
  Search,
} from '@material-ui/icons';

import { repositorySearch } from '../../core/git-https';

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
    const repositories = await repositorySearch({owner, query, config});
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
      className={classes.search}
    >
      <ListItemIcon style={{marginRight: '8px'}}>
        <IconButton
          onClick={() => updateRepositories(owner, query)}
        >
          <Search />
        </IconButton>
      </ListItemIcon>
      <InputBase
        placeholder="Owner…"
        defaultValue={owner}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(event) => {onOwner(event.target.value)}}
      />
      <InputBase
        placeholder="Search…"
        defaultValue={query}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(event) => {onQuery(event.target.value)}}
      />
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
  },
  inputInput: {
  }
});

export const SearchForm = withStyles(styles)(SearchFormComponent);
