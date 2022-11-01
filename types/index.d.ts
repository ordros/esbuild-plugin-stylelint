import { Plugin } from 'esbuild';
import { LinterOptions } from 'stylelint';

type StylelintLinterOption = LinterOptions & {
  filter: RegExp
};

declare function stylelint(options?: StylelintLinterOption): Plugin;

export default stylelint;
