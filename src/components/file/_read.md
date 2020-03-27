Reading files only requires a `repository`, a `config`, and a `filepath`.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContextProvider,
  AuthenticationContext,
  RepositoryContextProvider,
  RepositoryContext,
  FileContextProvider,
  FileContext,
  FileForm,
} from 'gitea-react-toolkit';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  const { state: file, component: fileComponent } = useContext(FileContext);

  return (!auth && authComponent) || (!repo && repoComponent) || fileComponent;
};

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();
const [file, setFile] = React.useState();
const [filepath, setFilepath] = React.useState('README.md');
const [branch, setBranch] = React.useState('master');
const [defaultContent, setDefaultContent] = React.useState();
const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider
  authentication={authentication}
  onAuthentication={setAuthentication}
  config={config}
>
  <RepositoryContextProvider
    repository={repository}
    onRepository={setRepository}
    config={config}
    defaultQuery=''
    full_name='unfoldingWord/en_ta'
    branch={branch}
  >
    <FileContextProvider
      filepath={filepath}
      // defaultContent={defaultContent} // would require authentication to do this
      file={file}
      onFile={setFile}
    >
      <FileForm
        branch={branch}
        filepath={filepath}
        defaultContent={defaultContent}
        submitText="Submit"
        onSubmit={({ branch: _branch, filepath: _filepath, defaultContent: _defaultContent}) => {
          setBranch(_branch);
          setFilepath(_filepath);
          setDefaultContent(_defaultContent);
        }}
      />
      <Component />
    </FileContextProvider>
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
