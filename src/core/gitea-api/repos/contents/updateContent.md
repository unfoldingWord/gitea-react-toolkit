```js
import { Core, readContent, updateContent } from 'gitea-react-toolkit';

const readProps = {
  config: {
    server: 'https://bg.door43.org',
    tokenid: 'PlaygroundTesting',
  },
  owner: 'klappy',
  repo: 'blank',
  ref: 'master',
  filepath: 'README.md',
};

const updateProps = {
  ...readProps,
  branch: 'testing',
  content: 'Testing updateContent',
  message: 'Testing updateContent via Gitea-React-Toolkit',
  author: {
    email: "user@example.com",
    username: "user",
  },
};

const promise = async (props) => {
  const file = await readContent(readProps);
  const _props = { ...props, sha: file.sha };
  const response = await updateContent(_props);
  return response;
};

<Core
  props={updateProps}
  promise={promise}
  authenticate
  confirm
/>
```