## No Authentication

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { RepositoryContext, RepositoryContextProvider, AuthenticationContextProvider } from 'gitea-react-toolkit';

function Component() {
  const { state: repository, actions, component } = useContext(RepositoryContext);

  return !repository ? component : <pre>{JSON.stringify(repository, null, 2)}</pre>;
};

const [repository, setRepository] = React.useState();

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider>
  <RepositoryContextProvider
    config={config}
    defaultOwner="unfoldingWord"
    defaultQuery="en_ta"
    repository={repository}
    onRepository={setRepository}
  >
    <Component />
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```

## Authenticated Repositories

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider
} from 'gitea-react-toolkit';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repo, actions: repoActions, component: repoComponent } = useContext(RepositoryContext);
  // the following are all the actions available for the repository context.
  const {
    close,
    create,
    update,
    dangerouslyDelete,
    fork,
    save,
    forks,
    updateBranch,
    read,
  } = repoActions;

  return (!auth && authComponent) || (!repo && repoComponent) || <pre>{JSON.stringify(repository, null, 2)}</pre>;
};

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();

<AuthenticationContextProvider
  config={{
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  }}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <RepositoryContextProvider
    authentication={authentication}
    repository={repository}
    onRepository={setRepository}
    config={authentication && authentication.config}
    defaultOwner={authentication && authentication.user.name}
    defaultQuery=""
  >
    <Component />
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
