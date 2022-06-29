
## usefile

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  useAuthentication,
  useRepository,
  useFile,
} from 'gitea-react-toolkit';

function Component() {
  const [authentication, setAuthentication] = React.useState();
  const [repository, setRepository] = React.useState();
  const [filepath, setFilepath] = React.useState();

  const { state: auth, component: authComponent } = useAuthentication({
    config: {
      server: "https://bg.door43.org",
      tokenid:"PlaygroundTesting",
    },
    authentication,
    onAuthentication: setAuthentication,
  });
  const { state: repo, component: repoComponent } = useRepository({
    authentication,
    repository,
    onRepository: setRepository,
    defaultOwner: authentication && authentication.user.name,
    defaultQuery: "",
    branch: 'testing',
  });
  const { state: file, actions: fileActions, component: fileComponent } = useFile({
    authentication,
    repository,
    filepath,
    onFilepath: setFilepath,
    create: false,
  });
    // the following are all the actions available for the file context.
  const {
    update,
    read,
    load,
    save,
    close,
    dangerouslyDelete,
  } = fileActions;

  return (!auth && authComponent) || (!repo && repoComponent) || (!file && fileComponent) || <pre>{JSON.stringify(file, null, 2)}</pre>;
};

<Component />;
```
