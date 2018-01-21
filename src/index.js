/* global window */

const defaultOptions = {
  wrapper: 'packageVersion',
  customPackageName: null
};

const hyphenCaseToCamelCase = (str) => {
  if (typeof str === 'string') {
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  }
  return str;
};

const assignToGlobal = (packageName, packageVersion, options) => {
  const wrapper = options.wrapper ? options.wrapper : 'packageVersion';
  if (typeof window !== 'undefined' && window) {
    window[wrapper] = window[wrapper] || {};
    window[wrapper][packageName] = packageVersion;
  }
  if (typeof global !== 'undefined' && global) {
    global[wrapper] = global[wrapper] || {};
    global[wrapper][packageName] = packageVersion;
  }
};

const globalPackageVersion = (packageJson, options = {}) => {
  let convertedPackageName;
  let packageVersion;

  // eslint-disable-next-line no-param-reassign
  options = Object.assign({}, defaultOptions, options);

  if (packageJson && packageJson.name && packageJson.version) {
    if (options.customPackageName) convertedPackageName = options.customPackageName;
    else convertedPackageName = hyphenCaseToCamelCase(packageJson.name);
    packageVersion = packageJson.version;
  } else {
    convertedPackageName = 'package__not__found';
    packageVersion = 'package__not__found';
  }

  assignToGlobal(convertedPackageName, packageVersion, options);
};


export default globalPackageVersion;
