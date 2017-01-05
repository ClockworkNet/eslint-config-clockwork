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
		'no-extra-semi': 'error',
		'no-unexpected-multiline': 'error',
		"semi-spacing": ['error', {'before': false, 'after': true}]
	},
	plugins: []
};