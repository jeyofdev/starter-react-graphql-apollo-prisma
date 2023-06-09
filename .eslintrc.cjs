module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: [
			'./tsconfig.json',
			'./client/tsconfig.json',
			'./client/tsconfig.node.json',
			'./api/tsconfig.json',
		],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			alias: {
				map: [
					['@components', './src/components'],
					['@hooks', './src/hooks'],
					['@images', './src/assets/images'],
					['@utils', './src/utils'],
					['@context', './src/context'],
					['@graphql', './src/graphql'],
				],
				extensions: ['.js', '.ts', '.jsx', '.tsx'],
			},
		},
	},
	ignorePatterns: ['.eslintrc.cjs'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/no-extraneous-dependencies': 'off',
	},
};
