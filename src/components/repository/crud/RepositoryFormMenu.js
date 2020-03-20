import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Modal,
  Paper,
} from '@material-ui/core';
import {
  FolderShared,
} from '@material-ui/icons';

import { RepositoryForm } from './';

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    maxHeight: '80%',
    overflow: 'scroll',
  },
}));

function RepositoryFormMenu() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const button = (
    <IconButton color="inherit" onClick={() => { setModal(true); }}>
      <FolderShared />
    </IconButton>
  );

  let modalComponent = <></>;

  if (modal) {
    modalComponent = (
      <Modal open={true} onClose={() => { setModal(false); }}>
        <Paper className={classes.modal}>
          <RepositoryForm />
        </Paper>
      </Modal>
    );
  }

  return (
    <>
      {button}
      {modalComponent}
    </>
  );
};

RepositoryFormMenu.propTypes = {};

export default RepositoryFormMenu;
