
The Search component brings together the SearchForm and Repositories components.

```js
import { Paper } from '@material-ui/core';
import { CurrentUserOrganizations } from 'gitea-react-toolkit';

<Paper style={{ maxHeight: '300px', overflow: 'scroll' }}>
  <CurrentUserOrganizations
    onOrganization={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
    config={{server: "https://bg.door43.org"}}
  />
</Paper>
```
