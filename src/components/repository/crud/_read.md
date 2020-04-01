In order to read a repository you must wrap with `RepositoryContext`.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContextProvider,
  RepositoryContextProvider,
  RepositoryContext,
} from 'gitea-react-toolkit';

function Component() {
  const { state: repo, components: { search, form } } = useContext(RepositoryContext);
  return (!repo) ? search : form;
}

const [repository, setRepository] = React.useState();

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider
      repository={repository}
      onRepository={setRepository}
      full_name="unfoldingWord/en_ta"
      config={{
        tokenid: "PlaygroundTesting",
        server: "https://bg.door43.org",
      }}
    >
      <Component />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```