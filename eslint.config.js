import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	// Base configuration for all files
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'package.json',
		],
		extends: [js.configs.recommended],
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				React: 'readonly',
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
		},
	},
	// TypeScript-specific configuration
	{
		files: ['src/**/*.{ts,tsx}'],
		extends: [...tseslint.configs.recommended],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: ['./tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	// Node TypeScript configuration
	{
		files: ['*.config.ts'],
		extends: [...tseslint.configs.recommended],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: ['./tsconfig.node.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}
);
