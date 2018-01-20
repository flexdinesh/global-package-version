/* eslint-disable import/no-extraneous-dependencies, no-console */
const globalPackageVersion = require('../lib');
globalPackageVersion(require('../package.json'));
globalPackageVersion(require('babel-cli/package.json'));

console.log(global.packageVersion);
