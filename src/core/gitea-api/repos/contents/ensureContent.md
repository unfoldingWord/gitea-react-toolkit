`ensureContent` will ensure the content of a filepath in an existing branch or a new_branch.

`ensureContent` will try to read the content from the branch.
If it does not exist in the branch, it will attempt to copy it from the default branch.
If it does not exist in the default branch, it will attempt to create it.

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
/>
```
