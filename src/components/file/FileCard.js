import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Card, CardContent, CardHeader, CardActions, Avatar,
} from '@material-ui/core';
import { BlockEditable, Actions } from 'markdown-translatable';

function FileCard({
  authentication,
  repository,
  file,
}) {
  const [preview, setPreview] = useState();
  const [markdown, setMarkdown] = useState(file ? file.content : '');
  const changed = (markdown !== (file && file.content));
  const avatarUrl = repository.avatar_url || repository.owner.avatar_url;

  useEffect(() => {
    setMarkdown(file && file.content);
  }, [file]);

  const branch = (file && file.branch) ? file.branch : repository.default_branch;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        title={<strong>{file && file.path}</strong>}
        subheader={repository.full_name + '/' + branch}
      />
      <CardContent>
        <Paper>
          <BlockEditable
            preview={preview}
            markdown={markdown}
            onEdit={setMarkdown}
            editable={!!authentication}
          />
        </Paper>
      </CardContent>
      <CardActions>
        <Actions
          onSectionable={()=>{}}
          onBlockable={()=>{}}
          preview={preview}
          onPreview={setPreview}
          changed={changed}
          onSave={() => {
            if (changed) file.save(markdown);
          }}
        />
      </CardActions>
    </Card>
  );
};

FileCard.propTypes = {
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
  }).isRequired,
  /** Pass a previously returned file object to bypass the selection. */
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sha: PropTypes.string.isRequired,
    content: PropTypes.string,
    branch: PropTypes.string,
    filepath: PropTypes.string,
  }),
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
  }),
};

export default FileCard;
