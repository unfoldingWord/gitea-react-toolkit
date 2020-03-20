The `RepositoryFormMenu` component helps create/edit a repository via a modal.

```js
import { Paper } from '@material-ui/core';
import { RepositoryFormMenu, AuthenticationContextProvider, RepositoryContextProvider } from 'gitea-react-toolkit';

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider>
      <RepositoryFormMenu />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```
