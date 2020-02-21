
There are three components that work together to render a Git Tree.

1. The [withBlob HOC](/tree#withblob-hoc)  is a Higher Order Component that wraps any component with access to a blob, and a tree to select one.
1. The [Tree Component](/tree#tree-component) is a higher level component that brings it all together, and renders a Tree Object Component.
1. The [TreeObject Component](/tree#treeobject-component) is a recursive component that renders a tree object and renders a Blob Object Component for each child Blob.
1. The [BlobObject Component](/tree#blobobject-component) is a component that renders a blob object.

These are based off of the documentation for the following Git Tree implementations:
- <a href='https://try.gitea.io/api/swagger#/repository/GetTree' target='_blank'>Gitea's Git Tree Rest API v1</a>
- <a href='https://developer.github.com/v3/git/trees/' target='_blank'>Github's Git Tree Rest API v3</a>
