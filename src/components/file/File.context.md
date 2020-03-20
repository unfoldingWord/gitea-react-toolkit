
## FileContext

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

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  const { state: file, actions: fileActions component: fileComponent } = useContext(FileContext);
    // the following are all the actions available for the file context.
  const {
    update,
    read,
    load,
    save,
    close,
    dangerouslyDelete,
  } = fileActions;

  return (!auth && authComponent) || (!repo && repoComponent) || (!file && fileComponent) || <pre>{JSON.stringify(file, null, 2)}</pre>;
};

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();
const [file, setFile] = React.useState();

<AuthenticationContextProvider
  config={{
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  }}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <RepositoryContextProvider
    repository={repository}
    onRepository={setRepository}
    defaultOwner={authentication && authentication.user.name}
    defaultQuery=""
    branch='testing'
  >
    <FileContextProvider
      // filepath={filepath}
      // defaultContent={defaultContent}
      file={file}
      onFile={setFile}
      create={false}
    >
      <Component />
    </FileContextProvider>
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
