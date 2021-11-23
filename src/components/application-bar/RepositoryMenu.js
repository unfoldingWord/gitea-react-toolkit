/* eslint-disable camelcase */
import React, {
  useState, useCallback, useContext,
} from 'react';
import {
  IconButton,
  Avatar,
  Modal,
  Paper,
  Chip,
} from '@material-ui/core';
import { FolderShared } from '@material-ui/icons';

import { useStyles } from './useStyles';
import { RepositoryContext, FileContext } from '..';

function RepositoryMenu() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const {
    state: repository,
    actions,
    component: repositoryComponent,
  } = useContext(RepositoryContext) || {};
  
  const { state: file, stateValues: fileStateValues, actions: fileActions } = useContext(FileContext) || {};

  const {
    name,
    avatar_url,
    owner,
    full_name,
  } = repository || {};

  const _onDelete = useCallback(() => {
    if (actions?.close) {
      if (fileActions?.onConfirmClose) {
        if (fileActions.onConfirmClose())
        {
          actions.close();
        }
      }
      else
      {
        actions.close();
      }
    }
  },[actions.close, file, fileActions?.onConfirmClose]);

  const handleOpen = useCallback(() => {
    setModal(true);
  }, []);

  let button;

  if (name && owner) {
    const avatarComponent = <Avatar src={avatar_url || owner.avatar_url} />;

    button = (
      <Chip
        id={`chip_${name}`}
        data-test="repository-item-icon"
        aria-label="repository-item-icon"
        avatar={avatarComponent}
        label={<span data-test="repository-item-chip">{name}</span>}
        onDelete={_onDelete}
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
};

export default RepositoryMenu;
