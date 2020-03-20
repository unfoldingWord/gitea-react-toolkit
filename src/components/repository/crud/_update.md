In order to update a repository you must pass authentication and repository or wrap with `AuthenticationContextProvider` and `RepositoryContextProvider`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  RepositoryForm,
} from 'gitea-react-toolkit';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);

  return (!auth && authComponent) || (!repo && repoComponent) || <RepositoryForm />;
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
