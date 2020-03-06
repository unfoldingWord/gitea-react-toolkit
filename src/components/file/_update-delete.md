In order to update a file the authenticated user has to have write access to the repo.

This example expects a markdown file to be selected and uses MarkdownTranslatable's BlockEditable component.

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
  authenticationConfig={{
    server: "https://bg.door43.org/",
    tokenid: "PlaygroundTesting",
  }}
/>
```
