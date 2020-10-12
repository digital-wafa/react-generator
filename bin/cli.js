#!/usr/bin/env node
const path = require('path');
const args = process.argv.slice(2);
const { Plop, run } = require('plop');
const argv = require('minimist')(args);

dirname = path.resolve(__dirname, '..');

Plop.launch({
  cwd: argv.cwd,
  configPath: path.join(dirname, 'plopfile.js'),
  require: argv.require,
  completion: argv.completion
}, run);
