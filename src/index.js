/* global window */

const assignToGlobal = (packageName, packageVersion) => {
  if (typeof window !== 'undefined' && window) {
    window.packageVersion = window.packageVersion || {};
    window.packageVersion[packageName] = packageVersion;
  }
  if (typeof global !== 'undefined' && global) {
    global.packageVersion = global.packageVersion || {};
    global.packageVersion[packageName] = packageVersion;
  }
};

const globalPackageVersion = (packageJson) => {
  let convertedPackageName;
  let packageVersion;

  if (packageJson && packageJson.name && packageJson.version) {
    convertedPackageName = typeof packageJson.name === 'string' ? packageJson.name.replace(/-/g, '_') : packageJson.name;
    packageVersion = packageJson.version;
  } else {
    convertedPackageName = 'package_not_found';
    packageVersion = 'package_not_found';
  }
  assignToGlobal(convertedPackageName, packageVersion);
};


export default globalPackageVersion;
