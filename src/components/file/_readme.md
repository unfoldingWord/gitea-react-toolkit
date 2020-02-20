# File HOC
The `withFile` HOC adds the ability to create, read, update and delete a file.

```withAuthentication(withRepository(withBlob(withFile(Component))))```

Requires `authentication`, `repository`, and `blob` (or `filepath`) props provided by wrapping it with the respective HOCs.

- `withAuthentication` and 'authentication' are only required for `create`, `update`, and `delete`.
- `withBlob` and `blob` prop is optional, but then the `filepath` prop is required.

See [Higher Order Components](/hoc) for more details on using HOCs.