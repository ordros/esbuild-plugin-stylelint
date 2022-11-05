const stylelint = require('stylelint');
const formatter = require('stylelint-formatter-pretty');

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
        formatter,
        ...stylelintOptions,
        files: targetFiles,
      });
      const { output } = result;
      if (output.length > 0) {
        console.log(output);
      }
    });
  }
});
