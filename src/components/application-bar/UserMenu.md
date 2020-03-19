
The `UserMenu` component helps manage a authentication via a modal with a menu to login and logout.

```js
import { Paper } from '@material-ui/core';
import { AuthenticationContextProvider, UserMenu } from 'gitea-react-toolkit';
const [authentication, setAuthentication] = React.useState();

<Paper>
  <AuthenticationContextProvider
    authentication={authentication}
    onAuthentication={setAuthentication}
    config={{
      server: "https://bg.door43.org",
      tokenid:"PlaygroundTesting",
    }}
  >
    <UserMenu />
  </AuthenticationContextProvider>
</Paper>
```
