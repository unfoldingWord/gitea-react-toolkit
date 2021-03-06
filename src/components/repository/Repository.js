import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Code } from '@material-ui/icons';

import { get } from '../../core';
import { localString } from '../../core/localStrings';

const useStyles = makeStyles((theme) => ({
  avatar: { borderRadius: '20%' },
}));

function Repository({ url, repository, onRepository, config }) {
  const classes = useStyles();
  const [repo, setRepo] = useState(repository || { owner: {} });

  const getData = useCallback(async () => {
    const data = await get({ url, config });
    setRepo(data);
    return data;
  }, [config, url]);

  useEffect(() => {
    if (Object.keys(repo.owner).length === 0) getData();
  }, [getData, repo.owner]);

  const _onRepository = useCallback(() => {
    if (repo && Object.keys(repo.owner).length) {
      onRepository(repo);
    } else {
      getData().then(onRepository)
    }
  }, [repo, onRepository]);

  const { owner, name, full_name, description, html_url, avatar_url } = repo;

  return (
    <ListItem
      data-test='repository-item'
      alignItems='flex-start'
      button
      ContainerComponent='div'
      onClick={_onRepository}
    >
      <ListItemAvatar>
        <Avatar
          alt={owner.fullname}
          src={avatar_url || owner.avatar_url}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText primary={description} secondary={full_name || name} />
      <ListItemSecondaryAction>
        <Tooltip title={localString('OpenRepo')} arrow>
          <IconButton
            aria-label='Open Link'
            onClick={() => {
              window.open(html_url, '_blank');
            }}
          >
            <Code />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

Repository.propTypes = {
  /** Repository data to render, if url not provided. */
  repository: PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    tree_url: PropTypes.string,
    avatar_url: PropTypes.string,
    branch: PropTypes.string,
  }),
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
  /** Url to get repository data, if repository data is not provided. */
  url: PropTypes.string,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
};

export default Repository;
