import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';

function withFileComponent(Component) {
  function FileComponent(props) {
    const {
      authentication,
      repository,
      blob,
      file,
      onFile,
      fileConfig,
    } = props;

    const [_file, setFile] = useState(file);
    const [deleted, setDeleted] = useState();

    const hasFile = () => !!_file;

    let filepath, defaultContent;

    if (fileConfig) {
      filepath = fileConfig.filepath;
      defaultContent = fileConfig.defaultContent;
    }

    if (blob) filepath = blob.filepath;

    const updateFile = (__file) => {
      if (onFile) onFile(__file);
      else setFile(__file);
    };

    const populateFile = async () => {
      const ref = null;
      const _ensureFile = await ensureFile({
        filepath, defaultContent, authentication, config: fileConfig, repository, ref,
      });
      const { push: writeable } = repository.permissions;

      const _populateFile = {
        ..._ensureFile,
        close: () => {
          updateFile();

          if (fileConfig.updateBlob) fileConfig.updateBlob();
        },
        content: await getContentFromFile(_ensureFile),
        filepath: _ensureFile.path,
        saveContent: !writeable ? null : async (content) => {
          await saveFile({
            content, authentication, repository, file: _ensureFile,
          });
          await populateFile();
        },
        dangerouslyDelete: !writeable ? null : async () => {
          const _deleted = await deleteFile({
            authentication, repository, file: _ensureFile,
          });

          if (_deleted) {
            setDeleted(true);
            updateFile();

            if (fileConfig.updateBlob) fileConfig.updateBlob();
          }
          return deleted;
        },
      };

      updateFile(_populateFile);
    };

    const needToPopulateFile = !hasFile() && filepath && !deleted;

    if (needToPopulateFile) populateFile();

    let component = <div />;

    if (hasFile()) component = <Component {...props} file={_file} />;

    return component;
  }

  FileComponent.propTypes = {
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

  return FileComponent;
}

export const withFile = withFileComponent;
