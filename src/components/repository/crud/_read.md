In order to read a repository you must pass `repository` or wrap with `withRepository`.

```js
import { Paper } from '@material-ui/core';
import { withRepository, RepositoryForm } from 'gitea-react-toolkit';
const RepositoryFormComponent = withRepository(RepositoryForm);

<Paper>
  <RepositoryFormComponent
    repositoryConfig={{
      server: "https://bg.door43.org",
      tokenid: "PlaygroundTesting"
    }}
  />
</Paper>
```