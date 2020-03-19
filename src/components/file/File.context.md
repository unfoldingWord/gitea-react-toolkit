
## Authenticated Files

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

  return !file ? component : <pre>{JSON.stringify(file, null, 2)}</pre>;
};

function RepositoryComponent() {
  const [file, setFile] = React.useState();
  const { state: authentication } = useContext(AuthenticationContext);
  const { state: repository, actions, component } = useContext(RepositoryContext);

  return !repository ? component : (
    <FileContextProvider
      config={authentication.config}
      authentication={authentication}
      repository={repository}
      // filepath={filepath}
      file={file}
      onFile={setFile}
    >
      <FileComponent />
    </FileContextProvider>
  );
};

function AuthenticatedRepositoryComponent() {
  const [repository, setRepository] = React.useState();
  const { state: authentication, actions, component, config } = useContext(AuthenticationContext);

  return !authentication ? component : (
    <RepositoryContextProvider
      authentication={authentication}
      repository={repository}
      onRepository={setRepository}
      config={authentication.config}
      defaultOwner={authentication.user.name}
      defaultQuery=""
      // branch=""
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
