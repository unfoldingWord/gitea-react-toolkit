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

function RepositoryFormMenu({
  authentication,
  repository,
  onRepository,
}) {
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
    <>
      {button}
      {modalComponent}
    </>
  );
};

RepositoryFormMenu.propTypes = {
  /** Authentication object returned from a successful withAuthentication login. */
  authentication: PropTypes.shape({
    config: PropTypes.shape({
      server: PropTypes.string.isRequired,
      headers: PropTypes.shape({
        Authorization: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
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
};

export default RepositoryFormMenu;
