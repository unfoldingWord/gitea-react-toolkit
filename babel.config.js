module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [
  'istanbul', 
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining',
]
};
