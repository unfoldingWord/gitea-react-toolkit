The `RepositoryMenu` component helps manage a repository via a modal with a menu to select a repository.

```js
import { Paper } from '@material-ui/core';
import { RepositoryMenu, AuthenticationContextProvider, RepositoryContextProvider } from 'gitea-react-toolkit';

const [repository, setRepository] = React.useState();

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider
      repository={repository}
      onRepository={setRepository}
      config={{
        server: "https://bg.door43.org",
      }}
    >
      <RepositoryMenu />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```

Customized list of Repositories for selection.

```js
import { Paper } from '@material-ui/core';
import { RepositoryMenu, AuthenticationContextProvider, RepositoryContextProvider } from 'gitea-react-toolkit';

const [repository, setRepository] = React.useState();

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider
      repository={repository}
      onRepository={setRepository}
      urls={[
        "https://bg.door43.org/api/v1/repos/door43-catalog/en_ta",
        "https://bg.door43.org/api/v1/repos/door43-catalog/en_tw",
      ]}
    >
      <RepositoryMenu />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```
