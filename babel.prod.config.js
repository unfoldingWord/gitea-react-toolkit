// build config for production (on publish)
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining',
]
};
