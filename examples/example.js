const globalPackageVersion = require('../lib');

globalPackageVersion.globalizeCurrentPackageVersion();
globalPackageVersion.globalizePackageVersion();

console.log(global.packageVersion);
