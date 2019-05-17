import React, { useState } from "react";
import PropTypes from 'prop-types';

import { getContent, saveContent, ensureFile, deleteFile } from './helpers';

function withFileComponent(Component) {
  function FileComponent (props) {
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
    if (blob) {
      filepath = blob.filepath;
    }

    const updateFile = (__file) => {
      if (onFile) onFile(__file);
      else setFile(__file);
    }

    const populateFile = async () => {
      const __file = await ensureFile(
        {filepath, defaultContent, authentication, config: fileConfig, repository}
      );
      const _content = await getContent({file: __file});
      __file.close = () => {
        updateFile()
        if (fileConfig.updateBlob) fileConfig.updateBlob();
      };
      __file.content = _content;
      __file.filepath = __file.path;
      if (repository.permissions.push) {
        __file.saveContent = async (content) => {
          await saveContent(
            {content, authentication, repository, file: __file}
          );
          populateFile();
        };
        __file.dangerouslyDelete = async () => {
          const _deleted = await deleteFile({authentication, repository, file: __file});
          if (_deleted) {
            setDeleted(true);
            updateFile();
            if (fileConfig.updateBlob) fileConfig.updateBlob();
          }
          return deleted;
        }
      }
      updateFile(__file);
    };

    if (!hasFile() && filepath && !deleted) populateFile();

    let component = <div />;
    if (hasFile()) {
      component = <Component {...props} file={_file} />;
    }

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
