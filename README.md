# `esbuild-plugin-stylelint`

## How to use

```js
const { build } = require('esbuild');
const stylelint = require('esbuild-plugin-stylelint');

build({
  // other build options...
  plugins: [
    stylelint(),
  ],
});
```

## Stylelint config

This plugin settings is basically conforms to [Stylelint Configuration](https://stylelint.io/user-guide/configure/).
it looks for possible configuration sources in the same way as stylelint.

## License

MIT
