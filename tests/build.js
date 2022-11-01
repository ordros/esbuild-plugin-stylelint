const { join } = require('path');
const { build } = require('esbuild');
const stylelint = require('../src');

build({
  entryPoints: [ join(__dirname, 'src/index.js') ],
  plugins: [ stylelint() ],
});
