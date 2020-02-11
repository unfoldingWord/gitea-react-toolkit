import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
  Chip,
} from '@material-ui/core';
import { FolderShared } from '@material-ui/icons';

import { withRepository } from '../repository';

function RepositoryMenuComponent({
  classes,
  authentication,
  repository,
  onRepository,
  repositoryConfig,
}) {
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

if (withRepository && withRepository.propTypes) {
  RepositoryMenuComponent.propTypes = { ...withRepository.propTypes, };
}

const styles = (theme) => ({
  avatar: {
    width: '35px',
    height: '35px',
  },
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    maxHeight: '80%',
    overflow: 'scroll',
  },
});

export const RepositoryMenu = withStyles(styles, { withTheme: true })(RepositoryMenuComponent);
