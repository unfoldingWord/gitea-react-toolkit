Providing data directly as props.

```js
import { Paper } from '@material-ui/core';
import { Repository } from 'gitea-react-toolkit';

import repositoryData from './repositoryData.json';

<Paper>
  <Repository
    repository={repositoryData}
    onRepository={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>
```

Providing url to fetch repository data.

```js
import { Paper } from '@material-ui/core';
import { Repository } from 'gitea-react-toolkit';

<Paper>
  <Repository
    url="https://bg.door43.org/api/v1/repos/door43-catalog/en_ta"
    onRepository={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>
```
