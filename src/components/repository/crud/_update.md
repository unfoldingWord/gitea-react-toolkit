In order to update a repository you must pass authentication and repository or wrap with `withAuthentication` and `withRepository`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
import { Paper } from '@material-ui/core';
import { withAuthentication, withRepository, RepositoryForm } from 'gitea-react-toolkit';

const AuthenticatedRepositoryForm = withAuthentication(withRepository(RepositoryForm));

<Paper>
  <AuthenticatedRepositoryForm
    authenticationConfig={{
      server: "https://bg.door43.org",
      tokenid: "PlaygroundTesting"
    }}
  />
</Paper>
```