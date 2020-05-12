## Authenticated Organizations

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  OrganizationContext,
  OrganizationContextProvider
} from 'gitea-react-toolkit';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: organization, actions, component: orgComponent } = useContext(OrganizationContext);
  // the following are all the actions available for the repository context.

  return (!auth && authComponent) || (!organization && orgComponent) || <pre>{JSON.stringify(organization, null, 2)}</pre>;
};

const [authentication, setAuthentication] = React.useState();
const [organization, setOrganization] = React.useState();

<AuthenticationContextProvider
  config={{
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  }}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <OrganizationContextProvider
    authentication={authentication}
    organization={organization}
    onOrganization={setOrganization}
    config={authentication && authentication.config}>
    <Component />
  </OrganizationContextProvider>
</AuthenticationContextProvider>
```
