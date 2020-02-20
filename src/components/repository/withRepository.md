```js
import { Paper, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import ReactJson from 'react-json-view';
import moment from 'moment';

import { withRepository } from 'gitea-react-toolkit';

import repositoryData from './repositoryData.json';
// Define your React component and optionally access repository in props.
function Component({
  repository,
}) {
  return (
    <Card>
      <CardHeader
        title={<strong>{repository.full_name}</strong>}
        subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')}
        avatar={<Avatar src={repository.owner.avatar_url} />} />
      <CardContent>
        <ReactJson src={repository} />
      </CardContent>
    </Card>
  );
};
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withRepository(Component);
 */
const RepositoryComponent = withRepository(Component);
// Then you can use your repository wrapped component.
<Paper>
  <RepositoryComponent
    //** Pass any props as you normally would. */
    repositoryConfig={{
      defaultOwner:"unfoldingWord",
      defaultQuery:"en_ta",
      server: "https://bg.door43.org",
    }}
  />
</Paper>
```
