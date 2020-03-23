```js
import { Core, readContent, deleteContent } from 'gitea-react-toolkit';

const readProps = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'klappy',
  repo: 'blank',
  ref: 'testing',
  filepath: 'README.md',
};

const deleteProps = {
  ...readProps,
  branch: 'testing',
  message: 'Testing deleteContent via Gitea-React-Toolkit',
  author: {
    email: "user@example.com",
    username: "user",
  },
};

const promise = async (props) => {
  const file = await readContent(readProps);
  const _props = { ...props, sha: file.sha };
  const response = await deleteContent(_props);
  return response;
};

<Core
  props={deleteProps}
  promise={promise}
  authenticate
/>
```
