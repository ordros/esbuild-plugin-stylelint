const stylelint = require('stylelint');
const formatter = require('stylelint-formatter-pretty');
const path = require('path');

module.exports = ({
  filter = /\.(s?css|jsx?|tsx?|vue)$/,
  ...stylelintOptions
} = {}) => ({
  name: 'stylelint',
  setup(build) {
    const targetFiles = [];
    build.onLoad({ filter }, ({ path }) => {
      if (!path.includes('node_modules')) {
        targetFiles.push(path);
      }
    });

    build.onEnd(async () => {
      const result = await stylelint.lint({
        ...stylelintOptions,
        files: targetFiles,
        formatter,
      });
      const { output } = result;
      if (output.length > 0) {
        console.log(output);
      }
    });
  }
});
