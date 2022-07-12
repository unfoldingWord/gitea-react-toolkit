`createContent` will allow saving of content to a filepath to an existing branch or a new_branch.
`createContent` will allow creation of a new_branch but only of a non-existing file in the default branch.

```js
import { Core, createContent } from 'gitea-react-toolkit';

const props = {
  config: {
    server: 'https://qa.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'unfoldingWord',
  repo: 'en_obs',
  branch: 'cecils-branch',
  filepath: 'README.md',
  content: 'Testing createContent',
  message: 'Testing createContent via Gitea-React-Toolkit',
  author: {
    email: "cecil.new@gmail.com",
    username: "cecil.new",
  },
};

<Core
  props={props}
  promise={createContent}
  authenticate
/>
```
