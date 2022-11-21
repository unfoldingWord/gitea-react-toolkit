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

Warning to close.

```js
import { Paper } from '@material-ui/core';
import { RepositoryMenu, AuthenticationContextProvider, RepositoryContextProvider, FileContextProvider } from 'gitea-react-toolkit';

const repository = {
  server: 'it',
  name: 'test_repo',
  avatar_url: 'about:blank',
  owner: 'me',
  full_name: 'The Test Repo',
};

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider
      repository={repository}
      urls={[
        "https://qa.door43.org/unfoldingWord/en_ta",
        "https://qa.door43.org/unfoldingWord/en_tw",
      ]}
    >
      <FileContextProvider
          onConfirmClose={() => {
            return new Promise(function (resolve, reject) {
                let confirmed = window.confirm('Es Verdad?');
                return confirmed ? resolve(true) : reject(false);
            })
          } }
          filepath="it.tsv"
        >
        <RepositoryMenu />
      </FileContextProvider>
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```
