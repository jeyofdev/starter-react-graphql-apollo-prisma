module.exports = {
	root: true,
	env: {
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: ['./tsconfig.json'],
		createDefaultProgram: true,
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				extensions: ['.js', '.ts'],
			},
		},
		'import/ignore': ['node_modules'],
	},
	rules: {
		'no-console': 'warn',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-cycle': [2, { maxDepth: 1 }],
	},

	ignorePatterns: ['.eslintrc.cjs', 'codegen.ts', 'src/__generated__', 'dist'],
};
