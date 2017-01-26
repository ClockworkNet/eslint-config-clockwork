'use strict';

module.exports = {
	'extends': [
		'eslint:recommended'
	],
	'parserOptions': {
		'ecmaVersion': 5
	},
	'env': {},
	'globals': {},
	'rules': {
		'no-console': 'warn',
		'semi': ['error', 'always'],
		"semi-spacing": ['error', {'before': false, 'after': true}]
	},
	plugins: []
};
