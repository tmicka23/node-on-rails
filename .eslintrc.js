module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'koa'],
	parserOptions: {
		ecmaVersion: 13
	},
	rules: {
		indent: [
			'error',
			'space'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
		]
	}
}
