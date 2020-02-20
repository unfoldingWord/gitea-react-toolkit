The Repository component renders the attributes of a repository as a list item.

You can wrap any component with `withRepository` so that you can require a repository object for the component.
It will also give access to the selected repository object through the props of the children.
If a repository is not already selected, it will render the Search or Repositories component depending on the repositoryConfig.
