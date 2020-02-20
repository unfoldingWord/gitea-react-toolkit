The component returns the form fields upon submission to the callback.

Form is disabled and error displayed when either no authentication or repository is provided.

```js
import { Paper } from '@material-ui/core';
import { RepositoryForm } from 'gitea-react-toolkit';

<Paper>
  <RepositoryForm
    actionText="Create/Edit Repository"
    onSubmit={(formData) => {
      alert(JSON.stringify(formData, null, 2));
    }}
  />
</Paper>
```