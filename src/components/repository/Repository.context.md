## No Authentication

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { RepositoryContext, RepositoryContextProvider } from 'gitea-react-toolkit';

function Component() {
  const { state: repository, actions, component } = useContext(RepositoryContext);

  return !repository ? component : <pre>{JSON.stringify(repository, null, 2)}</pre>;
};

const [repository, setRepository] = React.useState();

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<RepositoryContextProvider
  config={config}
  defaultOwner="unfoldingWord"
  defaultQuery="en_ta"
>
  <Component />
</RepositoryContextProvider>
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

function RepositoryComponent() {
  const { state: repository, actions, component } = useContext(RepositoryContext);

  return !repository ? component : <pre>{JSON.stringify(repository, null, 2)}</pre>;
};

function AuthenticatedRepositoryComponent() {
  const [repository, setRepository] = React.useState();
  const { state: authentication, actions, component } = useContext(AuthenticationContext);

  return !authentication ? component : (
    <RepositoryContextProvider
      authentication={authentication}
      repository={repository}
      onRepository={setRepository}
      config={authentication.config}
      defaultOwner={authentication.user.name}
      defaultQuery=""
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
