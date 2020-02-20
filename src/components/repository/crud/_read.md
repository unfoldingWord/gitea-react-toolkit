In order to read a repository you must pass `repository` or wrap with `withRepository`.

```js
const RepositoryFormComponent = withRepository(RepositoryForm);

    <Paper>
      <RepositoryFormComponent
        repositoryConfig={{
          server: "https://bg.door43.org",
          tokenid: "PlaygroundTesting"
        }}
      />
    </Paper>
```