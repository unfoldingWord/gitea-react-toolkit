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
// import CancelIcon from '@mui/icons-material/Cancel';
import { FolderShared } from '@material-ui/icons';
import CancelIcon from '@material-ui/icons/Cancel';

import { useStyles } from './useStyles';
import { RepositoryContext, FileContext } from '..';

function RepositoryMenu({
  repo,
  file: _file,
}) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const { state: repository, actions, component: repositoryComponent } = repo || useContext(RepositoryContext) || {};
  const { state: file, stateValues: fileStateValues, actions: fileActions } = _file || useContext(FileContext) || {};

  const {
    name,
    avatar_url,
    owner,
    full_name,
  } = repository || {};

  const _onDelete = useCallback(async () => {
    if (actions?.close) {
      if (fileActions?.onConfirmClose) {
        if (await fileActions.onConfirmClose())
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
        deleteIcon={<CancelIcon id={`deleteIcon_${name}`} />}
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
