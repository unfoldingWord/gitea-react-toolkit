Reading files only requires a `repository`, a `config`, and a `filepath`.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContextProvider,
  RepositoryContextProvider,
  RepositoryContext,
  FileContextProvider,
  FileContext,
} from 'gitea-react-toolkit';

function Component() {
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  const { state: file, component: fileComponent } = useContext(FileContext);

  return (!repo && repoComponent) || fileComponent;
};

const [repository, setRepository] = React.useState();
const [file, setFile] = React.useState();
const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider>
  <RepositoryContextProvider
    repository={repository}
    onRepository={setRepository}
    config={config}
    defaultQuery=''
    full_name='unfoldingWord/en_ta'
    branch='master'
  >
    <FileContextProvider
      filepath='README.md'
      // defaultContent={defaultContent}
      file={file}
      onFile={setFile}
    >
      <Component />
    </FileContextProvider>
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
