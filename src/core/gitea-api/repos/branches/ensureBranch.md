`createContent` will allow saving of content to a filepath to an existing branch or a new_branch.
`createContent` will allow creation of a new_branch but only of a non-existing file in the default branch.

```js
import { Core, ensureBranch } from 'gitea-react-toolkit';

const props = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'royalsix',
  repo: 'blank',
  branch: 'tc-create-3',
  content: 'Testing ensureBranch',
  message: 'Testing ensureBranch via Gitea-React-Toolkit',
  author: {
    email: "user@example.com",
    username: "user",
  },
};

<Core
  props={props}
  promise={ensureBranch}
  authenticate
/>
```
