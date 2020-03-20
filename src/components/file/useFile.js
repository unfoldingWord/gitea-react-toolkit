import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';
import {
  FileCard, FileForm, useBlob,
} from '..';

function useFile({
  authentication,
  repository,
  filepath: __filepath,
  defaultContent: __defaultContent,
  config,
  file: _file,
  onFile,
  create=false,
}) {
  const [{ filepath, defaultContent }, setFileProps] = useState({
    filepath: __filepath, defaultContent: __defaultContent,
  });
  const [blob, setBlob] = useState();
  const branch = repository && (repository.branch || repository.default_branch);
  const file = _file && deepFreeze(_file);

  const [deleted, setDeleted] = useState();

  const {
    state: blobState, actions: blobActions, components: blobComponents,
  } = useBlob({
    blob, onBlob: setBlob, config, repository, filepath,
  });

  const { push: writeable } = (repository && repository.permissions) ? repository.permissions : {};

  const update = useCallback((_file) => {
    onFile(_file);
  }, [onFile]);

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

  const read = useCallback((_filepath) => {
    setFileProps({ filepath: _filepath, defaultContent });
  }, [defaultContent]);

  useEffect(() => {
    if (!file && filepath && !deleted) load();
  }, [deleted, filepath, load, file]);

  const blobFilepath = blobState && blobState.filepath;

  useEffect(() => {
    if (blobFilepath) {
      const _fileProps = {
        branch, filepath: blobFilepath, defaultContent,
      };
      setFileProps(_fileProps);
    };
  }, [blobFilepath, branch, defaultContent]);

  const close = useCallback(() => {
    if (blobActions && blobActions.close) blobActions.close();
    update();
    setFileProps({});
  }, [update, blobActions]);

  useEffect(() => { // if there is a file but no repository, close file.
    if (!repository && file) close();
  }, [repository, file, close]);

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

      if (_deleted) setDeleted(true);
    };
  }, [file, authentication, branch, repository, writeable]);

  useEffect(() => {
    if (deleted) {
      close();
      setDeleted(false);
    };
  }, [deleted, close]);

  const actions = {
    update,
    read,
    load,
    save,
    close,
    dangerouslyDelete,
  };

  const components = {
    create: <FileForm onSubmit={setFileProps} />,
    browse: blobComponents.browse,
    fileCard: (
      <FileCard
        authentication={authentication}
        repository={repository}
        file={{ ...file, ...actions }}
      />
    ),
  };

  let component = <></>;

  if (file) component = components.fileCard;
  else if (!filepath) {
    if (create) component = components.create;
    else component = components.browse;
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
  /** use a form to create a new file */
  create: PropTypes.bool,
};

export default useFile;
