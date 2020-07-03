```js
import { Paper } from '@material-ui/core';
import { Repositories } from 'gitea-react-toolkit';

<Paper>
  <Repositories
    urls={[
      'https://bg.door43.org/api/v1/repos/unfoldingWord/en_ta',
      'https://bg.door43.org/api/v1/repos/unfoldingWord/en_tw',
      'https://bg.door43.org/api/v1/repos/unfoldingWord/en_tn',
      'https://bg.door43.org/api/v1/repos/unfoldingWord/en_obs',
      'https://bg.door43.org/api/v1/repos/unfoldingWord/en_obs-tn',
    ]}
    onRepository={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
  />
</Paper>;
```
