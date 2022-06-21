import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const external = ['vue'];
const globals = { vue: 'vue' };

export default [
  {
    external,
    input: 'src/index.js',
    output: {
      name: 'VueGoogleLogin',
      file: pkg.browser,
      format: 'umd',
      globals,
    },
    plugins: [resolve(), commonjs(), terser()],
  },
  {
    external,
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'default',
        globals,
      },
      { file: pkg.module, format: 'es', globals },
    ],

    plugins: [terser()],
  },
];
