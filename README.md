# stylelint-config-seegno

Seegno-flavored stylelint config.
This configuration was created for react environment using [styled-components](https://www.styled-components.com/),
however it can be applied in other contexts.

## Installation

```sh
npm install "stylelint^13.10.0" stylelint-config-seegno --save-dev
```

## Usage

Create an `.stylelintrc` file with the following:

```json
{
  "extends": ["stylelint-config-seegno"]
}
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint-styles": "stylelint './src/**/*.js'",
  }
}
```

and run the linter with:

```sh
npm run lint-styles
```

## Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
  "extends": "stylelint-config-seegno",
  "rules": {
    "your-rules-here"
  }
}
```
