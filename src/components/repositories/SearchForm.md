The SearchForm component will make a search api call and return the resulting repositories array.

```js
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import { SearchForm } from 'gitea-react-toolkit';

const [repos, setRepos] = useState([]);

<div>
  <h3>SearchForm:</h3>
  <Paper>
    <SearchForm
      defaultOwner="unfoldingword"
      defaultQuery="en_ta"
      onRepositories={setRepos}
      config={{server: "https://bg.door43.org"}}
    />
  </Paper>
  <h3>Search Results:</h3>
  <Paper style={{maxHeight: '300px', overflow: 'scroll'}}>
    <pre>{JSON.stringify(repos)}</pre>
  </Paper>
</div>
```
