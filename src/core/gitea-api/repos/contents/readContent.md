```js
import { Core, readContent } from 'gitea-react-toolkit';

const props = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'klappy',
  repo: 'blank',
  ref: 'testing',
  filepath: 'README.md',
};

<Core
  props={props}
  promise={readContent}
/>
```
