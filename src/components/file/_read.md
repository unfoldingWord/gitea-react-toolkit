Reading files only requires a `repository`, a `config`, and a `filepath`.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  FileContext,
  FileContextProvider,
} from 'gitea-react-toolkit';

function FileComponent() {
  const { state: file, actions, component, config } = useContext(FileContext);

  return component;
};

function RepositoryComponent() {
  const [file, setFile] = React.useState();
  const { state: repository, actions, component, config } = useContext(RepositoryContext);

  // const filepath = '_new_file_1.md';
  // const defaultContent = 'This is a new file, today...';

  return !repository ? component : (
    <FileContextProvider
      config={config}
      repository={repository}
      // filepath={filepath}
      // defaultContent={defaultContent}
      file={file}
      onFile={setFile}
    >
      <FileComponent />
    </FileContextProvider>
  );
};

const [repository, setRepository] = React.useState();
const branch = 'testing';
const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<RepositoryContextProvider
  repository={repository}
  onRepository={setRepository}
  config={config}
  defaultQuery=""
  // branch={branch}
>
  <RepositoryComponent />
</RepositoryContextProvider>
```
