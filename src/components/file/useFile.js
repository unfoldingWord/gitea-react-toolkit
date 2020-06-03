import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';
import {
  FileCard, FileForm, useBlob, RepositoryContext,
} from '..';

function useFile({
  authentication,
  repository,
  filepath,
  onFilepath,
  onFile,
  defaultContent,
  config,
  create=false,
}) {
  const [file, setFile] = useState();
  const [blob, setBlob] = useState();
  const { actions: repositoryActions } = useContext(RepositoryContext);
  const branch = repository && (repository.branch || repository.default_branch);

  const [deleted, setDeleted] = useState();

  const {
    state: blobState, actions: blobActions, components: blobComponents,
  } = useBlob({
    blob, onBlob: setBlob, config, repository, filepath,
  });

  const { push: writeable } = (repository && repository.permissions) ? repository.permissions : {};

  const update = useCallback((_file) => {
    setFile(_file);
    onFile(_file);
  }, [onFile]);

  const read = useCallback(async (_filepath) => {
    onFilepath && await onFilepath(_filepath);
  }, [onFilepath]);

  const load = useCallback(async () => {
    if (config && repository && filepath) {
      const _file = await ensureFile({
        filepath, defaultContent, authentication, config, repository, branch,
      });
      const content = await getContentFromFile(_file);

      update({
        ..._file, branch, content, filepath: _file.path,
      });
    }
  }, [authentication, branch, config, defaultContent, filepath, repository, update]);

  const createFile = useCallback(async ({
    branch: _branch, filepath: _filepath, defaultContent: _defaultContent,
  }) => {
    if (config && repository) {
      const _file = await ensureFile({
        authentication, config, repository,
        branch: _branch,
        filepath: _filepath,
        defaultContent: _defaultContent,
      });

      if (_file) {
        repositoryActions.updateBranch(_branch);
        onFilepath(_filepath);
      };
    }
  }, [authentication, config, onFilepath, repository, repositoryActions]);

  const close = useCallback(() => {
    if (blobActions && blobActions.close) {
      blobActions.close();
    }

    if (onFilepath) {
      onFilepath();
    }
    update();
  }, [update, blobActions, onFilepath]);

  const save = useCallback(async (content) => {
    if (writeable) {
      await saveFile({
        authentication, repository, branch, file, content,
      });
      await load();
    }
  }, [writeable, authentication, repository, branch, file, load]);

  const dangerouslyDelete = useCallback(async () => {
    if (writeable) {
      const _deleted = await deleteFile({
        authentication, repository, file, branch,
      });

      if (_deleted) {
        setDeleted(true);
      }
    };
  }, [file, authentication, branch, repository, writeable]);

  useEffect(() => {
    const notLoaded = (!file && filepath && !deleted);
    const loadNew = (file && filepath && file.filepath !== filepath);

    if (notLoaded || loadNew) {
      load();
    }
  }, [deleted, filepath, load, file]);

  const blobFilepath = blobState && blobState.filepath;

  useEffect(() => {
    if (blobFilepath && onFilepath) {
      onFilepath(blobFilepath);
    }
  }, [blobFilepath, onFilepath]);

  useEffect(() => { // if there is a file but no repository, close file.
    if (!repository && file) {
      close();
    }
  }, [repository, file, close]);

  useEffect(() => {
    if (deleted) {
      close();
      setDeleted(false);
    };
  }, [deleted, close]);

  const actions = {
    update,
    load,
    read,
    save,
    close,
    dangerouslyDelete,
  };

  const components = {
    create: repository && (
      <FileForm
        branch={branch}
        defaultContent={defaultContent}
        onSubmit={createFile}
      />
    ),
    browse: repository && blobComponents.browse,
    fileCard: repository && file && (
      <FileCard
        authentication={authentication}
        repository={repository}
        file={{ ...file, ...actions }}
      />
    ),
  };

  let component = <></>;

  if (file) {
    component = components.fileCard;
  } else if (!filepath) {
    if (create) {
      component = components.create;
    } else {
      component = components.browse;
    }
  }

  return {
    state: file,
    actions,
    component,
    components,
  };
};

useFile.propTypes = {
  /** The full filepath for the file. */
  filepath: PropTypes.string,
  /** Function to propogate filepath when the Blob is selected. */
  onFilepath: PropTypes.func,
  /** Function to propogate file when the Blob is loaded. */
  onFile: PropTypes.func,
  /** Authentication object returned from a successful withAuthentication login. */
  authentication: PropTypes.shape({
    config: PropTypes.shape({
      server: PropTypes.string.isRequired,
      headers: PropTypes.shape({ Authorization: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }),
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    owner: PropTypes.shape({ username: PropTypes.string.isRequired }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  /** use a form to create a new file */
  create: PropTypes.bool,
};

export default useFile;
