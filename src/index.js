/* global window */
/* eslint-disable no-underscore-dangle,
   global-require,
   import/no-extraneous-dependencies,
   import/no-dynamic-require
*/

const globalizeVersion = (packageJson) => {
  const convertedPackageName = typeof packageJson.name === 'string' ? packageJson.name.replace(/-/g, '_') : packageJson.name;
  const packageVersion = packageJson.version;
  if (typeof window !== 'undefined' && window) {
    window.packageVersion = window.packageVersion || {};
    window.packageVersion[convertedPackageName] = packageVersion;
  } else if (typeof global !== 'undefined' && global) {
    global.packageVersion = global.packageVersion || {};
    global.packageVersion[convertedPackageName] = packageVersion;
  }
};

const globalizePackageVersion = () => {
  // dynamic require won't work
  // const path = `${process.cwd()}/package.json`;
  const packageJson = require('acorn/package.json');
  globalizeVersion(packageJson);
};

const globalizeCurrentPackageVersion = () => {
  const packageJson = require(`${process.cwd()}/package.json`);
  globalizeVersion(packageJson);
};


export {
  globalizePackageVersion,
  globalizeCurrentPackageVersion
 };
