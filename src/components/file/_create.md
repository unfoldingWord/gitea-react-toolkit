
In order to create a file the authenticated user has to have write access to the repo.

This example expects a `branch`, `filepath`, and `defaultContent` to be given, and creates the file if it doesn't already exist.

### Branch

Supplying a branch when creating a file, will use `ensureFile` and will handle branch and file creation behind the scenes.

TODO: Currently branch is managed at Repository and not file. Make the FileForm work with updating Repository Branch.

See [ensureFile](/#/core%2Frepo%2Fcontents?id=section-ensure-content) for more information.

If `filepath` is not provided, a form will be provided as the `component` so that it can be provided.

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
  const { state: file, component: fileComponent } = useFile({
    authentication,
    repository,
    filepath,
    onFilepath: setFilepath,
    create: true,
  });

  return (!auth && authComponent) || (!repo && repoComponent) || fileComponent;
};

<Component />
```
