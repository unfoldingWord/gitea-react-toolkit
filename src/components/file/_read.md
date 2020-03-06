Reading files only requires a `repository`, a `config`, and a `filepath`.

```js
import React, { useMemo } from 'react';
import { useRepository, useFile } from 'gitea-react-toolkit';

// Define your React component and optionally access blob in props.
function FileComponent({
  repository,
  filepath,
  config,
}) {
  const { state, actions, component } = useFile({ repository, filepath, config });
  return component;
};

function Component({
  branch,
  filepath,
  config,
}) {
  const { state: repository, actions, component } = useRepository({ branch, config });

  const _component = useMemo(() => (
    (!repository) ? component : FileComponent({ repository, branch, filepath, config })
  ), [repository, branch, filepath, config]);
  return _component;
};

const branch = 'master';
const filepath = 'README.md';
const config = {
  server: "https://bg.door43.org/",
};

<Component
  //** Pass any props as you normally would. */
  branch={branch}
  // filepath={filepath}
  config={config}
/>
```
