# eslint-confog-clockwork

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for [Clockwork](https://clockwork.com)


## Install

1. Use npm to instal ESLint and `eslint-config-clockwork` and update your `package.json` `devDependencies`.
    
    ```
    npm install --save-dev eslint eslint-config-clockwork
    ```

2. Create a `.eslint.json` file in the root level of your project and add this:
    
    ```
{
    "extends": "clockwork"
}

    ```

## Goals

1. Focus on rules that could lead to bugs

2. Prefer rules that increase readability over stylistic or religious wars (like spacing)

3. Make linting easy for CMS, website and application projects

4. Applicable to many contexts (jQuery, Angular, React, Vue & Node). Projects may extend it with specifics for each if necessary.