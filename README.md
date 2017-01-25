# eslint-confog-clockwork

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for [Clockwork](https://clockwork.com)


## Install

```bash
npm install --save-dev eslint eslint-config-clockwork
```

## Usage

Create a `.eslint.json` file in the root level of your project and add this:
```json
{
    "extends": "clockwork"
}
```

### Task runner plugins

-   [Gulp ESLint](https://www.npmjs.com/package/gulp-eslint)
-   [Grunt ESLint](https://www.npmjs.com/package/grunt-eslint)

#### NPM Script

Update [`scripts`](https://docs.npmjs.com/misc/scripts) in your `package.json` at the root of your project.

```json
"scripts": {
  "lint": "./node_modules/.bin/eslint <FOLDER_TO_LINT>"
}
```

Run the NPM script from the command line

```shell
npm run lint
```

### Require before committing to GIT

Use [Husky](https://www.npmjs.com/package/husky)

```shell
npm install husky --save-dev
```

Add `precommit` to `package.json` [`scripts`](https://docs.npmjs.com/misc/scripts)

```json
"scripts": {
  "lint": "./node_modules/.bin/eslint <FOLDER_TO_LINT>",
  "precommit": "npm run lint"
}
```

## Goals

{0}. Focus on rules that could lead to bugs
{0}. Prefer rules that increase readability over stylistic or religious wars (like spacing)
{0}. Make linting easy for CMS, website and application projects
{0}. Applicable to many contexts (jQuery, Angular, React, Vue & Node). Projects may extend it with specifics for each if necessary.

## License

[MIT](http://vjpr.mit-license.org)