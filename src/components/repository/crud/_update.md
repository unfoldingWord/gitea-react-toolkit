In order to update a repository you must pass authentication and repository or wrap with `withAuthentication` and `withRepository`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
const AuthenticatedRepositoryForm = withAuthentication(withRepository(RepositoryForm));

<Paper>
  <AuthenticatedRepositoryForm
    authenticationConfig={{
      server: "https://bg.door43.org",
      tokenid: "PlaygroundTesting"
    }}
  />
</Paper>
```