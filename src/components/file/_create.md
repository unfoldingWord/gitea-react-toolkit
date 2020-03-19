
In order to create a file the authenticated user has to have write access to the repo.

This example expects a `branch`, `filepath`, and `defaultContent` to be given, and creates the file if it doesn't already exist.

### Branch

Supplying a branch when creating a file, will use `ensureFile` and will handle branch and file creation behind the scenes.

TODO: Currently branch is managed at Repository and not file. Make the FileForm work with updating Repository Branch.

See [ensureFile](/#/core%2Frepo%2Fcontents?id=section-ensure-content) for more information.

If `filepath` is not provided, a form will be provided as the `component` so that it can be provided.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  FileContext,
  FileContextProvider,
} from 'gitea-react-toolkit';

function FileComponent() {
  const { state: file, actions, component } = useContext(FileContext);

  return component;
};

function RepositoryComponent() {
  const [file, setFile] = React.useState();
  const { state: authentication } = useContext(AuthenticationContext);
  const { state: repository, actions, component, config } = useContext(RepositoryContext);

  // const filepath = '_new_file_1.md';
  // const defaultContent = 'This is a new file, today...';

  return !repository ? component : (
    <FileContextProvider
      config={config}
      authentication={authentication}
      repository={repository}
      // filepath={filepath}
      // defaultContent={defaultContent}
      file={file}
      onFile={setFile}
      create={true}
    >
      <FileComponent />
    </FileContextProvider>
  );
};

function AuthenticatedRepositoryComponent() {
  const [repository, setRepository] = React.useState();
  const { state: authentication, actions, component, config } = useContext(AuthenticationContext);

  const branch = 'testing';

  return !authentication ? component : (
    <RepositoryContextProvider
      authentication={authentication}
      repository={repository}
      onRepository={setRepository}
      config={config}
      defaultOwner={authentication.user.name}
      defaultQuery=""
      branch={branch}
    >
      <RepositoryComponent />
    </RepositoryContextProvider>
  );
}

const [authentication, setAuthentication] = React.useState();

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider
  config={config}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <AuthenticatedRepositoryComponent />
</AuthenticationContextProvider>
```
