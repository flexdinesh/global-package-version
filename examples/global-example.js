/* eslint-disable import/no-extraneous-dependencies, no-console */
const globalPackageVersion = require('../lib');
globalPackageVersion(require('../package.json'));
globalPackageVersion(require('babel-cli/package.json'));

console.log(global.packageVersion);
/*
  packageVersion = {
    globalPackageVersion: '0.1.0',
    babelCli: '6.26.0'
  }
*/
