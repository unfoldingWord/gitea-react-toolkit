import React, { useState } from 'react';
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
import { withRepository } from '..';

function RepositoryMenu({
  authentication,
  repository,
  onRepository,
  repositoryConfig,
}) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    repository.close();
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  let button;

  if (repository && repository.owner) {
    const avatarUrl = repository.avatar_url || repository.owner.avatar_url;

    button = (
      <Chip
        data-test="repository-item-icon"
        avatar={<Avatar src={avatarUrl} />}
        label={repository.name}
        onDelete={handleClose}
        color="primary"
      />
    );
  } else {
    button = (
      <IconButton
        onClick={handleOpen}
        color="inherit"
      >
        <FolderShared />
      </IconButton>
    );
  }

  let modalComponent = <div />;

  if (modal && !repository) {
    const RepositoryComponent = withRepository(<div />);

    modalComponent = (
      <Modal data-test="repository-menu-modal" open={true} onClose={() => setModal(false)}>
        <Paper className={classes.modal}>
          <RepositoryComponent
            authentication={authentication}
            repository={repository}
            onRepository={onRepository}
            repositoryConfig={repositoryConfig}
          />
        </Paper>
      </Modal>
    );
  }

  return (
    <div data-test="repository-menu">
      {button}
      {modalComponent}
    </div>
  );
}

// if (withRepository && withRepository.propTypes) {
//   RepositoryMenuComponent.propTypes = { ...withRepository.propTypes, };
// }
RepositoryMenu.propTypes = {
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
  repositoryConfig: PropTypes.shape({
    server: PropTypes.string.isRequired,
  }),
}

export default RepositoryMenu;
