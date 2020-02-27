```js
import { Core, readContent } from 'gitea-react-toolkit';

const props = {
  owner: 'klappy',
  repo: 'blank',
  filepath: 'README.md',
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  ref: 'klappy-patch-1',
};

<Core
  props={props}
  promise={readContent}
/>
```
