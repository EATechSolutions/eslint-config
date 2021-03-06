# Eslint Config

Linting and formatting with Eslint and Prettier

## Setup

### Add npm registry for @eatechsolutions in `.npmrc`
```
  @eatechsolutions:registry=https://npm.pkg.github.com/
```

### Install for JavaScript projects

```
yarn add -D eslint @eatechsolutions/eslint-config
```

Your ESLint config (`.eslintrc`) for a JavaScript project should extend: `@eatechsolutions/eslint-config`:

```
{
  "extends": "@eatechsolutions/eslint-config"
}
```

### Install for JavaScript projects with babel

```
yarn add -D eslint eslint-import-resolver-babel-module @eatechsolutions/eslint-config
```

Your ESLint config (`.eslintrc`) for a JavaScript project should extend: `@eatechsolutions/eslint-config`:

```
{
  "extends": "@eatechsolutions/eslint-config/babel"
}
```

### Install for TypeScript projects

```
yarn add -D eslint eslint-import-resolver-typescript @eatechsolutions/eslint-config
```

Your ESLint config for a TypeScript project should extend:

```
@eatechsolutions/eslint-config/typescript
```

#### Prettier

In your package.json, add:

```
"prettier": "@eatechsolutions/eslint-config/prettier"

...

scripts: {
  ...
  "lint": "eslint . && prettier --check src/**/*.js",
  "lint:fix": "eslint --fix . && prettier --write src/**/*.js",
  ...
}
```

Also make sure that the lint function is called by your CI.

### Other notes

Recommended VSCode config:

```
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "editor.formatOnType": true
  }
}

```

Recommended VSCode plugin: `dbaeumer.vscode-eslint`

if using CRA, in the `.env` file add
```
ESLINT_NO_DEV_ERRORS=true
```
