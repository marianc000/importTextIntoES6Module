import plugin from 'inlineawaits-rollup-plugin';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'js/main.js',
    output: [{
        file: 'js/bundle.js',
        format: 'esm'
    },
    {
        file: 'bundle.min.js',
        format: 'esm',
        name: 'version',
        plugins: [terser()]
    }
    ],
    plugins: [
        plugin( )
    ]
};