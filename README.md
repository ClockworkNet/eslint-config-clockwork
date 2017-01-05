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

## Goals

1. Focus on rules that could lead to bugs

2. Prefer rules that increase readability over stylistic or religious wars (like spacing)

3. Make linting easy for CMS, website and application projects

4. Applicable to many contexts (jQuery, Angular, React, Vue & Node). Projects may extend it with specifics for each if necessary.

## License

[MIT](http://vjpr.mit-license.org)