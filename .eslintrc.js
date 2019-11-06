const path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "@unfoldingword",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  "plugins": [
    "react",
    "cypress",
    "chai-friendly",
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 7,
    "sourceType": "module",
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname
  },
  "rules": {
    "@typescript-eslint/typedef": 2,
    "no-unused-vars": "warn",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-nested-ternary": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/typedef": [1, { "parameter": true, "arrowParameter": false }],
    "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
    "@typescript-eslint/no-this-alias": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/no-namespace": ["error"],
    "@typescript-eslint/no-misused-new": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
    "@typescript-eslint/no-magic-numbers": ["error", { "ignore": [0, 1], "ignoreNumericLiteralTypes": true, "ignoreArrayIndexes": true, "enforceConst": true }],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/func-call-spacing": ["error"],
    "@typescript-eslint/no-inferrable-types": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/class-name-casing": ["error"],
    "@typescript-eslint/camelcase": ["warn"],
    "camelcase": ["warn"],
    "no-undefined": "warn",
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "no-console": "off",
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "FunctionExpression": { "parameters": "first" },
      "FunctionDeclaration": { "parameters": "first" },
      "CallExpression": { "arguments": "first" }
    }]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "cypress/globals": true
  },
  "root": true
}