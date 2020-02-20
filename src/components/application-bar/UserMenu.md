
The `UserMenu` component helps manage a authentication via a modal with a menu to login and logout.

```js
import { Paper } from '@material-ui/core';
const [authentication, setAuthentication] = React.useState();

<Paper>
  <UserMenu
    authentication={authentication}
    onAuthentication={setAuthentication}
    authenticationConfig={{
      server: "https://bg.door43.org",
      tokenid:"PlaygroundTesting",
    }}
  />
</Paper>
```
