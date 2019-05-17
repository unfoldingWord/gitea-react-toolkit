
export default {
  menu: [
    'Getting Started',
    'Repositories',
    'Tree',
    'Authentication',
  ],
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /src\/components\/.*\/.*\.(js|jsx|ts|tsx)$/.test(filepath))
}
