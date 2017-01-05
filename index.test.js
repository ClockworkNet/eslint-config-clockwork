'use strict';

var assert = require('assert');
var eslint = require('eslint');

var cli = new eslint.CLIEngine();

// Test custom override rules are running
var report1 = cli.executeOnText('console.info("test")');
assert.equal(report1.warningCount, 1);
assert.equal(report1.results[0].messages[0].ruleId, 'no-console');

// Test rules recommended by eslint are running
var report2 = cli.executeOnText('({a: true, a:true});');
assert.equal(report2.errorCount, 1);
assert.equal(report2.results[0].messages[0].ruleId, 'no-dupe-keys');
