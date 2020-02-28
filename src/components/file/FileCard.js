import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Card, CardContent, CardHeader, Avatar,
} from '@material-ui/core';

function FileCard({
  repository,
  file,
}) {
  const style = { maxHeight: '200px', overflow: 'scroll' };

  let content;

  if (file) content = (typeof file.content === 'string') ?
    file.content : JSON.stringify(file.content, null, 2);

  const avatarUrl = repository.avatar_url || repository.owner.avatar_url;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        title={<strong>{file && file.path}</strong>}
        subheader={repository.full_name}
      />
      <CardContent>
        <Paper>
          <pre style={style}>
            {content}
          </pre>
        </Paper>
      </CardContent>
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
};

export default FileCard;
