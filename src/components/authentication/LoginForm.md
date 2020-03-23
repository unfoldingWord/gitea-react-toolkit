The LoginForm component returns the form fields upon submission to the callback.

```js
import { Paper } from '@material-ui/core';
import { LoginForm } from 'gitea-react-toolkit';

<Paper>
  <LoginForm
    config={{server:'https://bg.door43.org'}}
    actionText="Sign in"
    onSubmit={(formData) => {
      console.log(JSON.stringify(formData, null, 2));
    }}
  />
</Paper>
```