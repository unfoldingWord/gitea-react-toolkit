## useFile Custom Hook

The `useFile` custom hook adds the ability to create a file, with the `filepath` and `defaultContent`.

Requires `authentication`, and `repository` props that may be easily provided by wrapping it with the respective HOCs.

- `withAuthentication` and 'authentication' are only required for `create`, `update`, and `delete`.
