
In order to create a file the authenticated user has to have write access to the repo.

This example expects a `branch`, `filepath`, and `defaultContent` to be given, and creates the file if it doesn't already exist.

### Branch

Supplying a branch when creating a file, will use `ensureFile` and will handle branch and file creation behind the scenes.

See [ensureFile](/#/core%2Frepo%2Fcontents?id=section-ensure-content) for more information.

If `filepath` is not provided, a form will be provided as the `component` so that it can be provided.

```js
import { useState } from 'react';
import { withAuthentication, withRepository, useFile } from 'gitea-react-toolkit';

// Define your React component and optionally access blob in props.
function FileComponent({
  config,
  authentication,
  repository,
  filepath,
  defaultContent,
}) {
  const { state, actions, component } = useFile({
    config, authentication, repository, filepath, defaultContent,
  });

  return component;
};

const File = withAuthentication(withRepository(FileComponent));

// Then you can use your blob wrapped component.
const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();
const config = authentication && authentication.config;

const branch = 'testing';
const filepath = '_new_file.md';
const defaultContent = 'This is a new file...';

<File
  authenticationConfig={{
    server: 'https://bg.door43.org/',
    tokenid: 'PlaygroundTesting',
  }}
  authentication={authentication}
  // onAuthentication={setAuthentication}
  repository={repository}
  // onRepository={setRepository}
  config={config}
  branch={branch}
  filepath={filepath}
  defaultContent={defaultContent}
/>;
```
