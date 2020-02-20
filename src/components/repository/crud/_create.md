In order to create a repository you must pass authentication or wrap with `withAuthentication`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();
const AuthenticatedRepositoryForm = withAuthentication(RepositoryForm);

<Paper>
  <AuthenticatedRepositoryForm
    authentication={authentication}
    onAuthentication={setAuthentication}
    repository={repository}
    onRepository={setRepository}
    authenticationConfig={{
      server: "https://bg.door43.org",
      tokenid: "PlaygroundTesting"
    }}
  />
</Paper>
```
