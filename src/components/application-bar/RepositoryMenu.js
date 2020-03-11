/* eslint-disable camelcase */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
  Chip,
} from '@material-ui/core';
import { FolderShared } from '@material-ui/icons';

import { useStyles } from './useStyles';
import { useRepository } from '..';

function RepositoryMenu({
  repositories,
  urls,
  defaultOwner,
  defaultQuery,
  config,
  branch,
  authentication,
  repository: _repository,
  onRepository,
}) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const {
    state: repository,
    actions: { update, close },
    component: repositoryComponent,
  } = useRepository({
    authentication, repositories, urls, defaultOwner, defaultQuery, branch, config, repository: _repository,
  });

  const {
    name,
    avatar_url,
    owner,
    full_name,
  } = repository || {};

  useEffect(() => {
    if (_repository && _repository.full_name !== full_name) update(repository);

    if (repository && repository.full_name !== full_name) onRepository(repository);
    setModal(false);
  }, [_repository, full_name, onRepository, repository, update]);

  const handleOpen = useCallback(() => {
    setModal(true);
  }, []);

  let button;

  if (name && owner) {
    const avatarComponent = <Avatar src={avatar_url || owner.avatar_url} />;

    button = (
      <Chip
        data-test="repository-item-icon"
        avatar={avatarComponent}
        label={name}
        onDelete={close}
        color="primary"
      />
    );
  } else {
    button = (
      <IconButton onClick={handleOpen} color="inherit">
        <FolderShared />
      </IconButton>
    );
  };

  let modalComponent = <></>;

  if (modal && !full_name) {
    modalComponent = (
      <Modal data-test="repository-menu-modal" open={true} onClose={() => setModal(false)}>
        <Paper className={classes.modal}>
          {repositoryComponent}
        </Paper>
      </Modal>
    );
  };

  return (
    <div data-test="repository-menu">
      {button}
      {modalComponent}
    </div>
  );
};

RepositoryMenu.propTypes = {
  /** Urls array to get repository data, if repository data is not provided. */
  urls: PropTypes.array,
  /** Repositories data array to render, if urls not provided. */
  repositories: PropTypes.array,
  /** Prefill the owner search field. */
  defaultOwner: PropTypes.string,
  /** Prefill the query search field. */
  defaultQuery: PropTypes.string,
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }),
  /** Function to call when repository is selected. */
  onRepository: PropTypes.func.isRequired,
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
  }),
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
};

export default RepositoryMenu;
