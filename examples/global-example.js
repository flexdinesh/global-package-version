/* eslint-disable import/no-extraneous-dependencies, no-console */
const globalPackageVersion = require('../lib');
globalPackageVersion(require('../package.json'));
globalPackageVersion(require('babel-cli/package.json'));

console.log(global.packageVersion);
/*
  packageVersion = {
    global_package_version: '0.1.0',
    babel_cli: '6.26.0'
  }
*/
