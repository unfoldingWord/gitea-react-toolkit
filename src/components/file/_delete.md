
In order to delete a file the authenticated user has to have write access to the repo.

```withAuthentication(withRepository(withBlob(withFile(Component))))```

This example expects any file file to be selected and will allow you to delete a file after you view it.

```js
import {
  withAuthentication, withRepository, useFile,
} from 'gitea-react-toolkit';

// Define your React component and optionally access blob in props.
function Component({
  authentication,
  repository,
  branch,
}) {
  const { state, actions, component } = useFile({ authentication, repository, branch });
  return component;
};

const WrappedComponent = withAuthentication(withRepository(Component));

<WrappedComponent
  //** Pass any props as you normally would. */
  branch='testing'
  authenticationConfig={{
    server: "https://bg.door43.org/",
    tokenid: "PlaygroundTesting",
  }}
/>
```
