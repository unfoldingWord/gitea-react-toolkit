`ensureContent` will ensure the content of a filepath in an existing branch or a new_branch.

When creating a file, there are three cases:

1. The file already exists in the given branch.
2. The file does not exist in the given branch but does in the default branch.
3. The file does not exist in the given branch and does not in the default branch.

All three cases are handled via `ensureFile`.

1. `ensureContent` will try to read the content from the branch.
2. If it does not exist in the branch, it will attempt to copy it from the default branch.
    - `defaultContent` will be used to change the file in the given branch.
3. If it does not exist in the default branch, it will attempt to create it.
    - `defaultContent` will be used to create the file in the given branch.

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
