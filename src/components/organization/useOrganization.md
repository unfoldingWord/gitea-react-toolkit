```js
import { Paper, Button } from '@material-ui/core';
import { useOrganization } from 'gitea-react-toolkit';

function UseOrganizationComponent () {
  const config = { server: "https://bg.door43.org", tokenid:"PlaygroundTesting" };
  const onOrganization = (data) => {
    alert(JSON.stringify(data, null, 2));
  }
  const { actions, component, state } = useOrganization({config, onOrganization});
  return (
  <Paper>
    {component}
    <Button onClick={actions.close}>Close</Button>
    <Button onClick={actions.list} color="primary">List</Button>
  </Paper>
  )
}

<UseOrganizationComponent />
```
