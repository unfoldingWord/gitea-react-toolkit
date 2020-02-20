```js
import {useState} from 'react';
import { FormCheckbox } from 'gitea-react-toolkit';

const [checked, setChecked] = useState();

<FormCheckbox
  name="checkbox"
  label="Checkbox"
  onChange={setChecked}
  disabled={false}
  checked={checked}
/>
```
