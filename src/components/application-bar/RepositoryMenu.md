The `RepositoryMenu` component helps manage a repository via a modal with a menu to select a repository.

## Using Hooks

```js
import { Paper } from '@material-ui/core';
import { 
  useAuthentication,
  useRepository 
  } from 'gitea-react-toolkit';

const config={
        server: "https://bg.door43.org",
      };


const [repository, setRepository] = React.useState();

const repo = useRepository({repository, config, onRepository: setRepository});

<Paper>
      <RepositoryMenu repo={repo}/>
</Paper>
```

## using context

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

## Using Hooks

```js
import { Paper } from '@material-ui/core';
import { 
  useAuthentication,
  useRepository
  } from 'gitea-react-toolkit';

const urls = [
        "https://bg.door43.org/api/v1/repos/door43-catalog/en_ta",
        "https://bg.door43.org/api/v1/repos/door43-catalog/en_tw"
      ]


const [repository, setRepository] = React.useState();

const repo = useRepository({repository, onRepository: setRepository, urls});

<Paper>
      <RepositoryMenu repo={repo}/>
</Paper>
```
## using context

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
