
export default {
  typescript: true,
  menu: [
    'Getting Started',
    'ApplicationBar',
    'Higher Order Components',
    'Authentication',
    'Repository CRUD',
    'Repositories',
    'Repository',
    'File CRUD',
    'Tree/Blob',
  ],
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /src\/components\/.*\/.*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBabelRc: (config) => {
    config.plugins = [['istanbul', {
      exclude: [
        '**/*.spec.js',
      ],
      include: [
        '**/components/**',
      ],
    }]];
  },
};
