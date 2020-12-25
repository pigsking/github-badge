import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: "./index.ts",
    output: [
        {
            file: "./dist/gihub-badge.min.js",
            format: "iife",
            name:'Badge'
        }
    ],
    plugins: [
        typescript(),
        babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' }),
        terser()
    ]
}