const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const {
  name, version, repository,
} = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

const pathComponents = path.join(__dirname, 'src/components/');
const pathCore = path.join(__dirname, 'src/core/gitea-api');
const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'Application Bar ',
    content: path.join(pathComponents, 'application-bar', '_readme.md'),
    components: [
      'ApplicationBar',
      'DrawerMenu',
      'RepositoryMenu',
      'UserMenu',
    ].map(componentName =>
      path.join(pathComponents, 'application-bar', `${componentName}.js`)
    ),
  },
  {
    name: 'Authentication ',
    content: path.join(pathComponents, 'authentication', '_readme.md'),
    components: [
      'withAuthentication',
      'Authentication',
      'LoginForm',
    ].map(componentName =>
      path.join(pathComponents, 'authentication', `${componentName}.js`)
    ),
  },
  {
    name: 'File CRUD',
    content: path.join(pathComponents, 'file', '_readme.md'),
    sections: [
      {
        name: 'Create',
        content: path.join(pathComponents, 'file', '_create.md'),
      },
      {
        name: 'Read',
        content: path.join(pathComponents, 'file', '_read.md'),
      },
      {
        name: 'Update',
        content: path.join(pathComponents, 'file', '_update.md'),
      },
      {
        name: 'Delete',
        content: path.join(pathComponents, 'file', '_delete.md'),
      },
    ],
  },
  {
    name: 'Repositories ',
    content: path.join(pathComponents, 'repositories', '_readme.md'),
    components: [
      'Repositories',
      'Search',
      'SearchForm',
    ].map(componentName =>
      path.join(pathComponents, 'repositories', `${componentName}.js`)
    ),
  },
  {
    name: 'Repository ',
    content: path.join(pathComponents, 'repository', '_readme.md'),
    components: [
      'Repository',
      'withRepository',
    ].map(componentName =>
      path.join(pathComponents, 'repository', `${componentName}.js`)
    ),
  },
  {
    name: 'Repository CRUFD ',
    content: path.join(pathComponents, 'repository/crud', '_readme.md'),
    sections: [
      {
        name: 'Create',
        content: path.join(pathComponents, 'repository/crud', '_create.md'),
      },
      {
        name: 'Read',
        content: path.join(pathComponents, 'repository/crud', '_read.md'),
      },
      {
        name: 'Update',
        content: path.join(pathComponents, 'repository/crud', '_update.md'),
      },
      {
        name: 'Fork',
        content: path.join(pathComponents, 'repository/crud', '_fork.md'),
      },
      {
        name: 'Delete',
        content: path.join(pathComponents, 'repository/crud', '_delete.md'),
      },
    ],
    components: [
      'RepositoryForm',
      'RepositoryFormMenu',
      'FormCheckBox',
    ].map(componentName =>
      path.join(pathComponents, 'repository/crud', `${componentName}.js`)
    ),
  },
  {
    name: 'Tree/Blob ',
    content: path.join(pathComponents, 'tree-blob', '_readme.md'),
    components: [
      'Tree',
      'TreeObject',
      'BlobObject',
      'withBlob',
    ].map(componentName =>
      path.join(pathComponents, 'tree-blob', `${componentName}.js`)
    ),
  },
  {
    name: 'core/http',
    content: path.join(pathCore, 'http', '_readme.md'),
    sections: [
      {
        name: 'get',
        content: path.join(pathCore, 'http', 'get.md'),
      },
      {
        name: 'post',
        content: path.join(pathCore, 'http', 'post.md'),
      },
      {
        name: 'put',
        content: path.join(pathCore, 'http', 'put.md'),
      },
      {
        name: 'del',
        content: path.join(pathCore, 'http', 'del.md'),
      },
    ],
  },
  {
    name: 'core/repo/contents',
    content: path.join(pathCore, 'repos/contents', '_readme.md'),
    sections: [
      {
        name: 'Create Content',
        content: path.join(pathCore, 'repos/contents', 'createContent.md'),
      },
      {
        name: 'Read Content',
        content: path.join(pathCore, 'repos/contents', 'readContent.md'),
      },
      {
        name: 'Update Content',
        content: path.join(pathCore, 'repos/contents', 'updateContent.md'),
      },
      {
        name: 'Delete Content',
        content: path.join(pathCore, 'repos/contents', 'deleteContent.md'),
      },
      {
        name: 'Ensure Content',
        content: path.join(pathCore, 'repos/contents', 'ensureContent.md'),
      },
    ],
  },
  {
    name: 'Core ',
    content: path.join(pathComponents, 'core', '_readme.md'),
    components: [
      'Core',
      'CoreWithAuth',
    ].map(componentName =>
      path.join(pathComponents, 'core', `${componentName}.js`)
    ),
  },
];

module.exports = {
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
  styles,
  theme,
  getComponentPathLine: (componentPath) => {
    const file = componentPath.split('/').pop();
    const component = file.split('.').shift();
    const componentName = upperFirst(camelCase(component));
    return `import { ${componentName} } from "${name}";`;
  },
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections,
  components: 'src/components/**/[A-Z]*.js',
  moduleAliases: { 'gitea-react-toolkit': path.resolve(__dirname, 'src') },
  version,
  webpackConfig: require( 'react-scripts/config/webpack.config' ),
  // webpackConfig: {
  //   devtool: 'source-map',
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader',
  //       },
  //       {
  //         test: /\.css$/,
  //         loader: 'style-loader!css-loader',
  //       },
  //     ],
  //   },
  // },
  // propsParser: require('react-docgen-typescript').withCustomConfig(
  //   './tsconfig.json'
  // ).parse,
};

