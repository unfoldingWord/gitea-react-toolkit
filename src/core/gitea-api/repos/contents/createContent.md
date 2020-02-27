```js
import { Core, createContent } from 'gitea-react-toolkit';

const props = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'klappy',
  repo: 'blank',
  branch: 'testing',
  filepath: 'new_file.md',
  content: 'Testing createContent',
  message: 'Testing createContent via Gitea-React-Toolkit',
  author: {
    email: "user@example.com",
    username: "user",
  },
};

<Core
  props={props}
  promise={createContent}
  authenticate
  confirm
/>
```
