module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  parser: '@babel/eslint-parser',
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
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      'babel-module': {}
    },
    react: {
      version: 'detect'
    }
  }
}
