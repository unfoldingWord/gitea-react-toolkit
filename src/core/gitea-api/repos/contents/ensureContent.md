```js
import { Core, ensureContent } from 'gitea-react-toolkit';

const props = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'klappy',
  repo: 'blank',
  branch: 'testing',
  filepath: 'README.md',
  content: 'Testing ensureContent',
  message: 'Testing ensureContent via Gitea-React-Toolkit',
  author: {
    email: "user@example.com",
    username: "user",
  },
};

<Core
  props={props}
  promise={ensureContent}
  authenticate
  confirm
/>
```
