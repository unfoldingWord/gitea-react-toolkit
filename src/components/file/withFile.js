import React, { useState } from "react";
import PropTypes from 'prop-types';

import { getContent, saveContent } from './helpers';
import { getFile } from '../../core/git-https';

function withFileComponent(Component) {
  function FileComponent (props) {
    const {
      authentication,
      repository,
      blob,
      filepath,
      file,
      onFile,
    } = props;

    const [_file, setFile] = useState(file);

    const updateFile = async () => {
      const __file = await getFile({
        owner: repository.owner.username,
        repo: repository.name,
        filepath: filepath || blob.filepath,
        config: authentication.config,
      });
      const _content = await getContent({file: __file});
      __file.content = _content;
      __file.saveContent = async (content) => {
        await saveContent({
          content,
          authentication,
          repository,
          file: __file
        });
        // setTimeout(updateFile, 1000);
        updateFile();
      };
      if (onFile) onFile(__file);
      else setFile(__file);
    };

    let component = <div />;
    if (_file) component = <Component {...props} file={_file} />;
    else updateFile();

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
    }).isRequired,
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
