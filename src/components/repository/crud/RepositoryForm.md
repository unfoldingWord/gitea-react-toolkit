The component returns the form fields upon submission to the callback.

Form is disabled and error displayed when either no authentication or repository is provided.

```js
<Paper>
  <RepositoryForm
    actionText="Create/Edit Repository"
    onSubmit={(formData) => {
      alert(JSON.stringify(formData, null, 2));
    }}
  />
</Paper>
```