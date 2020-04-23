Get does not pass payload even if passed.

```js
import { Core, get } from 'gitea-react-toolkit';

const props = {
  url: 'api/v1/user/orgs',
  config: {
    server: 'https://bg.door43.org/',
    tokenid: 'PlaygroundTest'
  },
};

<Core
  authenticate={true}
  promise={get}
  props={props}
/>
```