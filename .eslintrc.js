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
    "no-unused-vars": "warn",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-nested-ternary": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/typedef": ["off"],
    "@typescript-eslint/no-unnecessary-type-arguments": ["off"],
    "@typescript-eslint/no-this-alias": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-namespace": ["off"],
    "@typescript-eslint/no-misused-new": ["off"],
    "@typescript-eslint/no-misused-promises": ["off"],
    "@typescript-eslint/no-magic-numbers": ["off"],
    "@typescript-eslint/no-floating-promises": ["off"],
    "@typescript-eslint/func-call-spacing": ["off"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/adjacent-overload-signatures": ["off"],
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/class-name-casing": ["off"],
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-misused-promises": ["off"],
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
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true, "allowTypedFunctionExpressions": true }],
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
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            "checksVoidReturn": false
          }
        ],
      }
    }
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "root": true
}