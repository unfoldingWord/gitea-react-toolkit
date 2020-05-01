Providing data directly as props.

```js
import { Paper } from '@material-ui/core';
import { Organization } from 'gitea-react-toolkit';

import organizationData from './organizationData.json';

<Paper>
  <Organization
    organization={organizationData}
    onOrganization={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>
```

Providing url to fetch organization data.

```js
import { Paper } from '@material-ui/core';
import { Organization } from 'gitea-react-toolkit';

<Paper>
  <Organization
    url="https://bg.door43.org/unfoldingWord"
    onOrganization={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>
```
