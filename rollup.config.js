import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  external: [
    'global',
    'lodash',
    'polished',
    'react-kawaii',
    'react-loadingg',
    'styled-components',
    'styled-reset'
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ]
}
