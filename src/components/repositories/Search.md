
The Search component brings together the SearchForm and Repositories components.

```js
import { Paper } from '@material-ui/core';
import { Search } from 'gitea-react-toolkit';

<Paper style={{maxHeight: '300px', overflow: 'scroll'}}>
  <Search
    defaultOwner="unfoldingword"
    defaultQuery="en_ta"
    onRepository={(data) => {
      alert(JSON.stringify(data, null, 2));
    }}
    config={{server: "https://bg.door43.org"}}
  />
</Paper>
```
