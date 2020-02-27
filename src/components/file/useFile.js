/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';

function useFile({
  authentication,
  repository,
  branch,
  blob,
  file,
  onFile,
  config,
}) {
  const [_file, setFile] = useState(file);
  const [deleted, setDeleted] = useState();

  const hasFile = useCallback(() => (
    !!_file
  ), [_file]);

  let filepath, defaultContent;

  if (config) {
    filepath = config.filepath;
    defaultContent = config.defaultContent;
  }

  if (blob) filepath = blob.filepath;

  const updateFile = (__file) => {
    if (onFile) onFile(__file);
    else setFile(__file);
  };

  const populateFile = async () => {
    const _ensureFile = await ensureFile({
      filepath, defaultContent, authentication, config, repository, branch,
    });
    const { push: writeable } = repository.permissions;

    const close = async () => {
      await updateFile();

      if (fileConfig.updateBlob) await fileConfig.updateBlob();
    };

    const content = await getContentFromFile(_ensureFile);

    const saveContent = async (content) => {
      if (writeable) {
        await saveFile({
          content, authentication, repository, file: _ensureFile, branch,
        });
        await populateFile();
      }
    };

    const dangerouslyDelete = async () => {
      if (writeable) {
        const _deleted = await deleteFile({
          authentication, repository, file: _ensureFile, branch,
        });

        if (_deleted) {
          setDeleted(true);
          updateFile();

          if (fileConfig.updateBlob) fileConfig.updateBlob();
        }
        return deleted;
      }
    };

    const _populateFile = {
      ..._ensureFile,
      branch,
      close,
      content,
      filepath: _ensureFile.path,
      saveContent,
      dangerouslyDelete,
    };

    updateFile(_populateFile);
  };

  if (!hasFile() && filepath && !deleted) populateFile();

  return {
    state: { file: _file },
    actions: {},
    component: ( <></> ),
  };
};

useFile.propTypes = {
  /** The full filepath for the file. */
  filepath: PropTypes.string,
  /** Pass a previously returned file object to bypass the selection. */
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sha: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  /** Function to propogate when the Blob is selected. */
  onFile: PropTypes.func,
  /** Pass a blob object. */
  blob: PropTypes.shape({
    /** The full filepath generated in the Tree/Blob Object */
    filepath: PropTypes.string.isRequired,
  }),
  /** Function to propogate when the Blob is selected. */
  onEdit: PropTypes.func,
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
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default useFile;
