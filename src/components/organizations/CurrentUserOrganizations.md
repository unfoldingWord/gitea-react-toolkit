
The CurrentUserOrganizations component allows for authentication to see a users organizations

```js
import { Paper } from '@material-ui/core';
import { CurrentUserOrganizations } from 'gitea-react-toolkit';

<CurrentUserOrganizations
  onOrganization={(data) => {
    alert(JSON.stringify(data, null, 2));
  }}
  config={{server: "https://bg.door43.org", tokenid:"PlaygroundTesting",}}
/>
```
