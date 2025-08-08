module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=16.0.0' },
    ],
    'node/no-missing-import': 'off',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // Set to module for ESM
  },
  env: {
    node: true,
    es6: true,
  },
};
