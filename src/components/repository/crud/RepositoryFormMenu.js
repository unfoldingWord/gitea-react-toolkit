import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Modal,
  Paper,
} from '@material-ui/core';
import {
  FolderShared,
} from '@material-ui/icons';

import { RepositoryForm } from './';

function RepositoryFormMenuComponent({
  classes,
  authentication,
  repository,
  onRepository,
}) {
  const [modal, setModal] = useState(false);

  const button = (
    <IconButton color="inherit" onClick={() => { setModal(true); }}>
      <FolderShared />
    </IconButton>
  );

  let modalComponent = <div />;
  if (modal) {
    modalComponent = (
      <Modal open={true} onClose={() => { setModal(false); }}>
        <Paper className={classes.modal}>
          <RepositoryForm
            authentication={authentication}
            repository={repository}
            onRepository={onRepository}
          />
        </Paper>
      </Modal>
    );
  }

  return (
    <>{button}{modalComponent}</>
  );
}

RepositoryFormMenuComponent.propTypes = {
};

const styles = (theme) => ({
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    maxHeight: '80%',
    overflow: 'scroll',
  }
});

export const RepositoryFormMenu = withStyles(styles, { withTheme: true })(RepositoryFormMenuComponent);
