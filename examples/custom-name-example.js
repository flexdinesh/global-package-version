/* eslint-disable import/no-extraneous-dependencies, no-console */
const globalPackageVersion = require('../lib');
globalPackageVersion(require('babel-cli/package.json'), { wrapperVariableName: 'coolVersionWrapper' });

console.log(global.coolVersionWrapper);
/*
  coolVersionWrapper = {
    babel_cli: '6.26.0'
  }
*/
