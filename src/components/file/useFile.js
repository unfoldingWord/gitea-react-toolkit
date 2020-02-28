import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';

function useFile({
  authentication,
  repository,
  branch,
  filepath,
  defaultContent,
  file: __file,
  onFile,
  config,
}) {
  const [file, setFile] = useState(__file);
  const [deleted, setDeleted] = useState();

  const { push: writeable } = repository.permissions;

  const hasFile = useCallback(() => (
    !!file
  ), [file]);

  const updateFile = useCallback((_file) => {
    if (onFile) onFile(_file);
    setFile(_file);
  }, [onFile]);

  const close = useCallback(() => {
    updateFile();
  }, [updateFile]);

  const refreshFile = useCallback(async () => {
    const _file = await ensureFile({
      filepath, defaultContent, authentication, config, repository, branch,
    });
    const content = await getContentFromFile(_file);

    updateFile({
      ..._file,
      branch,
      content,
      filepath: _file.path,
    });
  }, [authentication, branch, config, defaultContent, filepath, repository, updateFile]);

  useEffect(() => {
    if (!hasFile() && filepath && !deleted) refreshFile();
  }, [deleted, filepath, hasFile, refreshFile]);

  const save = useCallback(async (content) => {
    if (writeable) {
      await saveFile({
        authentication, repository, branch, file, content,
      });
      await refreshFile();
    }
  }, [writeable, authentication, repository, branch, file, refreshFile]);

  const dangerouslyDelete = useCallback(async () => {
    if (writeable) {
      const _deleted = await deleteFile({
        authentication, repository, file, branch,
      });

      if (_deleted) {
        setDeleted(true);
        updateFile();
      }
      return _deleted;
    }
  }, [file, authentication, branch, repository, updateFile, writeable]);

  return {
    state: file,
    actions: {
      save,
      close,
      dangerouslyDelete,
    },
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
    content: PropTypes.string,
    branch: PropTypes.string,
    filepath: PropTypes.string,
  }),
  /** Function to propogate when the Blob is selected. */
  onFile: PropTypes.func,
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
