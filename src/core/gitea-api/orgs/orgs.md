```js
import { Core, get } from 'gitea-react-toolkit';

const organizationName = 'unfoldingWord';
const props = {
  url: `api/v1/orgs/${unfoldingWord}`
};

<Core
  promise={get}
  props={props}
/>
```