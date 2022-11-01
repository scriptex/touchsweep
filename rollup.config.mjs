import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/touchsweep.ts',
	output: {
		dir: 'dist',
		name: 'Touchsweep',
		format: 'umd',
		exports: 'named',
		sourcemap: true
	},
	plugins: [typescript(), commonjs()]
};
