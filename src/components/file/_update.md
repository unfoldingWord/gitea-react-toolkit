In order to update a file the authenticated user has to have write access to the repo.

This example expects a markdown file to be selected and uses MarkdownTranslatable's BlockEditable component.

# TODO: FIX Persistence
For some reason toggling between md/html preview modes is losing edits.

```js
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import {
  withAuthentication, withRepository, withBlob, useFile, FileCard,
} from 'gitea-react-toolkit';

// Define your React component and optionally access blob in props.
function Component({
  authentication,
  repository,
  blob: {
    filepath,
  },
  branch,
  fileConfig: config
}) {
  const { state: file, actions } = useFile({ authentication, repository, branch, filepath, config });
  return (
    <FileCard authentication={authentication} repository={repository} file={file} actions={actions} />
  )
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withAuthentication(withRepository(withBlob(Component)));
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
