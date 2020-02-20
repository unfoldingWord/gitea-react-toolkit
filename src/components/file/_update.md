In order to update a file the authenticated user has to have write access to the repo.

```withAuthentication(withRepository(withBlob(withFile(Component))))```

This example expects a markdown file to be selected and uses MarkdownTranslatable's BlockEditable component.

# TODO: FIX Persistence
For some reason toggling between md/html preview modes is losing edits.

```js
import { useState } from 'react';
import {
  Paper, Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Button,
} from '@material-ui/core';
import { Code, Save, SaveOutlined } from '@material-ui/icons';
import { BlockEditable } from "markdown-translatable";
import { withAuthentication, withRepository, withBlob, withFile } from 'gitea-react-toolkit';

// Define your React component and optionally access blob in props.
function Component({
  repository,
  file,
}) {
  const [preview, setPreview] = useState();
  const [markdown, setMarkdown] = useState(file.content);
  const changed = (markdown !== file.content);
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={repository.owner.avatar_url} />}
        title={<strong>{file.path}</strong>}
        subheader={repository.full_name}
      />
      <CardContent>
        <Paper>
          <BlockEditable
            preview={preview}
            markdown={markdown}
            onEdit={setMarkdown}
          />
        </Paper>
      </CardContent>
      <CardActions>
        <IconButton onClick={()=> setPreview(!preview)}><Code /></IconButton>
        <IconButton onClick={()=> { if (changed) file.saveContent(markdown); }}>
          { changed ? <Save /> : <SaveOutlined /> }
        </IconButton>
      </CardActions>
    </Card>
  );
};
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withAuthentication(withRepository(withBlob(withFile(Component))));
// Then you can use your blob wrapped component.
<Paper>
  <WrappedComponent
    //** Pass any props as you normally would. */
    authenticationConfig={{
      server: "https://bg.door43.org/",
      tokenid: "PlaygroundTesting",
    }}
  />
</Paper>
