module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
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
