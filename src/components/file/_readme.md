## FileContext and useFile Custom Hook

The `useFile` custom hook adds the ability to create a file, with the `filepath` and `defaultContent`.

### Requirements

Requires `authentication`, and `repository` props that may be easily provided one of two ways.

- Context API: `AuthenticationContext` and `RepositoryContext`.
- Custom Hooks (recommended): `useAuthentication` and `useRepository`.

### Custom Hooks

When using custom hooks, it is recommended to use nested components to minimize complexity.
When attempting to use the same component with multiple hooks, that are dependent on the previous, it can get complicated to update the already rendered hook.

See [Read](/#/File%20CRUD?id=section-read) for an example.
