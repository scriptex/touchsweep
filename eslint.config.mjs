import globals from 'globals';

import prettier from 'eslint-config-prettier';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			prettier,
			tsEsLint
		},
		rules: {
			'no-console': 'error'
		}
	}
];
