module.exports = {
  'roots': [
    '<rootDir>/src',
  ],
  // 'transform': { '^.+\\.ts?$': 'ts-jest' },
  'moduleFileExtensions': [
    'js',
    'ts',
  ],
  'coveragePathIgnorePatterns': [
    '/node_modules/',
  ],
  'testPathIgnorePatterns': [
    '/node_modules/',
    'components',
  ],
  'collectCoverageFrom': [
    'src/core/**/*.{js,jsx,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  'coverageDirectory': './coverage/',
};