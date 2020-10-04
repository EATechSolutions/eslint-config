module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
    es2020: true
  },
  ignorePatterns: [
    'artifacts/',
    'build/',
    'coverage/',
    'dist/',
    'node_modules/'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  plugins: [
    'prettier',
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint',
    'import'
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
