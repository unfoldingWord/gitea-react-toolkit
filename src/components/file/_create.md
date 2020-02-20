
In order to create a file the authenticated user has to have write access to the repo.

The `withFile` HOC adds the ability to create a file, with the `filepath` and `defaultContent`.

For creating files, a `filepath` for a non-existing file is required and incompatible with `withBlob` HOC and `blob` prop.

```withAuthentication(withRepository(withFile(Component)))```

Requires `authentication`, and `repository` props provided by wrapping it with the respective HOCs.

### Example
This example expects a filepath to be given, and creates it if it doesn't already exist.
It will use BlockEditable component to populate the contents.

This example manages application state to remove the need to login and select repo each time you change filepath.

```js
import { useState } from 'react';
import {
  Paper, Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Button, TextField,
  } from '@material-ui/core';
import { Code, Save, SaveOutlined } from '@material-ui/icons';
import { BlockEditable } from "markdown-translatable";
import { withAuthentication, withRepository, withFile } from 'gitea-react-toolkit';
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
  )
};
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withAuthentication(withRepository(withFile(Component)));
// Then you can use your blob wrapped component.
const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();
const [filepath, setFilepath] = useState();
const [defaultContent, setDefaultContent] = useState();
const [fileConfig, setFileConfig] = useState();

<>
  {(
    authentication && repository &&
    <Paper style={{marginBottom: '1em', padding: '1.3em'}}>
      <form>
        <button type="submit" disabled style={{display: 'none'}} aria-hidden="true"></button>
        <TextField
          name='filepath' label='filepath' type='text' autoComplete={undefined}
          variant="outlined" margin="normal" fullWidth
          onChange={(e) => setFilepath(e.target.value)}
        />
        <TextField
          name='defaultContent' label='defaultContent' type='text' multiline={true} autoComplete={undefined}
          variant="outlined" margin="normal" fullWidth
          onChange={(e) => setDefaultContent(e.target.value)}
        />
        <Button type="button" disabled={!(authentication && repository && filepath)} fullWidth variant="contained" color="primary"
          onClick={() => setFileConfig({ filepath, defaultContent })}
        >
          Create
        </Button>
      </form>
    </Paper>
  )}
  <Paper>
    <WrappedComponent
      //** Pass any props as you normally would. */
      authenticationConfig={{
        server: "https://bg.door43.org/",
        tokenid: "PlaygroundTesting",
      }}
      authentication={authentication}
      onAuthentication={setAuthentication}
      repository={repository}
      onRepository={setRepository}
      fileConfig={fileConfig}
    />
  </Paper>
</>
```
