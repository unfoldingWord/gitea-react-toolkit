const path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "@unfoldingword"
  ],
  "plugins": [
    "react",
    "cypress",
    "chai-friendly"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 7,
    "sourceType": "module",
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "plugin:@typescript-eslint/recommended"
      ],
      "plugins": [
        "@typescript-eslint"
      ],
      "parserOptions": {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname
      },
      "rules": {
        "@typescript-eslint/typedef": 2,
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
  "rules": {
    "no-unused-vars": "warn",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-nested-ternary": ["off"],
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