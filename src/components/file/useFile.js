import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useDeepCompareCallback } from 'use-deep-compare';

import {
  saveFile, ensureFile, deleteFile, getContentFromFile,
} from './helpers';
import {
  FileCard, FileForm, useBlob,
} from '..';
import useFileContent from './useFileContent';

function useFile({
  authentication,
  repository,
  filepath,
  onFilepath,
  defaultContent,
  config: _config,
  create=false,
  onOpenValidation,
  onLoadCache,
  onSaveCache,
  onConfirmClose,
  releaseFlag,
}) {
  const [file, setFile] = useState();
  const [isChanged, setIsChanged] = useState(false);
  const [blob, setBlob] = useState();

  const config = _config || repository?.config || authentication?.config || {};
  const { state: { cacheContent, publishedContent }, actions: contentActions } = useFileContent({
    authentication,
    repository,
    config,
    file,
    onLoadCache,
  });
  const state = file && { ...file, cacheContent, publishedContent };
  const branch = repository && (repository.branch || repository.default_branch);
  const [deleted, setDeleted] = useState();

  const _setBlob = useDeepCompareCallback(async (_blob) => {
    if (blob && _blob && typeof onConfirmClose == 'function') {
      const confirm = await onConfirmClose()

      if (confirm) {
        setBlob(_blob);
      }
    } else{
      setBlob(_blob);
    }
  },[blob, setBlob, onConfirmClose]);

  const {
    state: blobState, actions: blobActions, components: blobComponents,
  } = useBlob({
    blob, onBlob: _setBlob, config, repository, filepath, releaseFlag,
  });

  const { push: writeable } = (repository && repository.permissions) ? repository.permissions : {};

  const update = useCallback((_file) => {
    setFile(_file);
  }, []);

  useEffect(() => {
    setIsChanged(false);
  }, [file, deleted, closed]);

  const read = useCallback(async (_filepath) => {
    if (onFilepath) {
      await onFilepath(_filepath);
    };
  }, [onFilepath]);

  const load = useDeepCompareCallback(async () => {
    if (config && repository && filepath) {
      const _file = await ensureFile({
        authentication,
        branch,
        config,
        defaultContent,
        repository,
        filepath,
        onOpenValidation,
      });

      const content = await getContentFromFile(_file);
      update({
        ..._file,
        content,
        branch,
        filepath: _file.path,
      });
    };
  }, [
    authentication,
    branch,
    config,
    defaultContent,
    filepath,
    repository,
    update,
  ]);
  
  const createFile = useDeepCompareCallback(async ({
    branch: _branch, filepath: _filepath, defaultContent: _defaultContent, onOpenValidation,
  }) => {
    if (config && repository) {
      const _file = await ensureFile({
        authentication,
        config,
        repository,
        branch: _branch,
        filepath: _filepath,
        defaultContent: _defaultContent,
        onOpenValidation,
      });

      if (_file) {
        onFilepath(_filepath);
      };
    };
  }, [authentication, config, repository, onFilepath]);

  const close = useDeepCompareCallback(() => {
    if (blobActions && blobActions.close) {
      blobActions.close();
    };

    if (onFilepath) {
      onFilepath();
    };
    update();
  }, [update, blobActions, onFilepath]);

  const saveCache = useDeepCompareCallback(async (_content) => {
    if (onSaveCache) {
      await onSaveCache({authentication, repository, branch, file, content: _content});
    }
  }, [writeable, authentication, repository, branch, file, onSaveCache]);

  const save = useDeepCompareCallback(async (_content) => {
    await saveFile({ authentication, repository, branch, file, content: _content });
    // (save() will not happen for "OFFLINE" system files)
    await saveCache(); // Empty cache if user has saved this file
    await load();
    contentActions.reset();
  }, [writeable, authentication, repository, branch, file, load, saveFile, saveCache]);

  const dangerouslyDelete = useDeepCompareCallback(async () => {
    if (writeable) {
      const _deleted = await deleteFile({
        authentication, repository, file, branch,
      });

      if (_deleted) {
        setDeleted(true);
      }
    };
  }, [file, authentication, branch, repository, writeable]);

  useDeepCompareEffect(() => {
    const notLoaded = (!file && filepath && !deleted);
    const loadNew = (file && filepath && file.filepath !== filepath);

    if (notLoaded || loadNew) {
      // console.log("useFile.useDeepCompareEffect(): notLoaded || loadNew", file);
      load();
    }
  }, [authentication, repository, deleted, filepath, load, file]);

  const blobFilepath = blobState && blobState.filepath;

  useEffect(() => {
    if (blobFilepath && onFilepath) {
      onFilepath(blobFilepath);
    };
  }, [blobFilepath, onFilepath]);

  useDeepCompareEffect(() => { // if there is a file but no repository, close file.
    if (!repository && file) close();
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
    saveCache,
    onSaveCache,
    onLoadCache,
    close,
    dangerouslyDelete,
    setIsChanged,
    onConfirmClose,
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
  };

  return {
    state,
    stateValues: {isChanged},
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
