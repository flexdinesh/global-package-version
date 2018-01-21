/* eslint-disable import/no-extraneous-dependencies, no-console */
const globalPackageVersion = require('../lib');
globalPackageVersion(require('babel-cli/package.json'), { wrapper: 'coolVersionWrapper' });
globalPackageVersion(require('align-text/package.json'), { customPackageName: 'alignTextVersion' });

console.log(global.coolVersionWrapper);
/*
  coolVersionWrapper = {
    babelCli: '6.26.0'
  }
*/
console.log(global.packageVersion);
/*
  packageVersion = {
    alignTextVersion: '0.1.4'
  }
*/
