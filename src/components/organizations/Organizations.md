```js
import { Paper } from '@material-ui/core';
import { Organizations } from 'gitea-react-toolkit';

<Paper>
  <Organizations
    urls={
      [
        "https://bg.door43.org/api/v1/orgs/BCS-translationAcademy",
        "https://bg.door43.org/api/v1/orgs/OpenScriptures",
        "https://bg.door43.org/api/v1/orgs/DokuWiki",
        "https://bg.door43.org/api/v1/orgs/eBible.org",
      ]
    }
    onOrganization={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>
```
