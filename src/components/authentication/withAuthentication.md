You can wrap any component with `withAuthentication` so that you can require authentication for the component.
It will also give access to the authentication object through the props of the children.
If not already authenticated, it will render the Authenticaiton component.

```js
import { Paper, Card, CardContent, CardHeader, Avatar, CardActions, IconButton } from '@material-ui/core';
import { Favorite, Share, ExitToApp } from '@material-ui/icons';
import { loremIpsum } from 'lorem-ipsum';
import moment from 'moment';

import { withAuthentication } from 'gitea-react-toolkit';

// Define your React component and optionally access authentication in props.
function Mission({
  message,
  authentication,
  authentication: {
    user,
    token,
  },
}) {
  return (
    <Card>
      <CardHeader title={<strong>Clearance Granted</strong>} subheader={moment().format('MMMM Do YYYY, h:mm:ss a')} avatar={<Avatar src={user.avatar_url} />} />
      <CardContent>
        <p>Your mission, should you choose to accept...</p>
        <p><strong><em>{message}</em></strong></p>
      </CardContent>
      <CardActions>
        <IconButton onClick={()=> alert(`Now get out your decoder ring, ${user.full_name}, and get to work!`)}><Favorite /></IconButton>
        <IconButton onClick={()=> alert("Alright Elon, let's not tweet about our missions.")}><Share /></IconButton>
        <IconButton onClick={()=> authentication.logout()}><ExitToApp /></IconButton>
      </CardActions>
    </Card>
  );
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(Component);
 */
const AuthenticatedMission = withAuthentication(Mission);
// Then you can use your authentication wrapped component.
<Paper>
  <AuthenticatedMission
    //** Pass any props as you normally would. */
    message={loremIpsum()}
    authenticationConfig={{
      tokenid: "PlaygroundTesting",
      server: "https://bg.door43.org",
      /** Optionally override messages. */
      messages: {
        actionText:"Verify Your Identity to See Your Mission",
        genericError: "Nothing to see here, carry on.",
        usernameError: "Your no agent, did you forget your name?",
        passwordError: "Are you sure you are who you think you are?",
        networkError: 'There is an issue with your network connection. Please try again.',
        serverError: 'There is an issue with the server please try again.',
      },
    }}
    /** Pass a previously returned authentication object to skip authentication form.
      authentication={{
        user: {...},
        token: {...},
        remember: false,
      }}
      */
  />
</Paper>
```
