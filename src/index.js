/* global window */

const assignToGlobal = (packageName, packageVersion, options) => {
  const varName = options.wrapperVariableName ? options.wrapperVariableName : 'packageVersion';
  if (typeof window !== 'undefined' && window) {
    window[varName] = window[varName] || {};
    window[varName][packageName] = packageVersion;
  }
  if (typeof global !== 'undefined' && global) {
    global[varName] = global[varName] || {};
    global[varName][packageName] = packageVersion;
  }
};

const globalPackageVersion = (packageJson, options = {}) => {
  let convertedPackageName;
  let packageVersion;

  if (packageJson && packageJson.name && packageJson.version) {
    convertedPackageName = typeof packageJson.name === 'string' ? packageJson.name.replace(/-/g, '_') : packageJson.name;
    packageVersion = packageJson.version;
  } else {
    convertedPackageName = 'package_not_found';
    packageVersion = 'package_not_found';
  }
  assignToGlobal(convertedPackageName, packageVersion, options);
};


export default globalPackageVersion;
