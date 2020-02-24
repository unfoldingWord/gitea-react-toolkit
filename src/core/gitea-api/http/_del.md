Delete does not pass params nor allow caching even if passed.

```js
import { Core, del } from 'gitea-react-toolkit';

const props = {
  url: 'delete',
  config: {
    server: 'https://httpbin.org',
  },
  params: { attribute: 'value' },
  payload: { key: 'value' },
  noCache: true,
};

<Core
  promise={del}
  props={props}
/>
```
