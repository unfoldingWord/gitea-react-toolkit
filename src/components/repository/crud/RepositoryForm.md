The component returns the form fields upon submission to the callback.

Form is disabled and error displayed when either no authentication or repository is provided.

```js
import { Paper } from '@material-ui/core';
import { RepositoryForm, AuthenticationContextProvider, RepositoryContextProvider } from 'gitea-react-toolkit';

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider>
      <RepositoryForm
        actionText="Create/Edit Repository"
        onSubmit={(formData) => {
          alert(JSON.stringify(formData, null, 2));
        }}
      />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```