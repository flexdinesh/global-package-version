# Global Package Version
[![Build Status](https://travis-ci.org/flexdinesh/global-package-version.svg?branch=master)](https://travis-ci.org/flexdinesh/global-package-version)
[![npm version](https://badge.fury.io/js/global-package-version.svg)](https://www.npmjs.com/package/global-package-version)
[![dependencies Status](https://david-dm.org/flexdinesh/global-package-version/status.svg)](https://david-dm.org/flexdinesh/global-package-version)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dt/global-package-version.svg)](https://www.npmjs.com/package/global-package-version)

Look up the version of one or more npm packages in browser console.

This library sets the package version in global/window variable so it can be accessed anywhere in your code or browser console.

## Install

```
$ npm install --save global-package-version
```

## Usage

### Import
```js
// ES6 style
import globalPackageVersion from 'global-package-version';
// or
//ES5 style
var globalPackageVersion = require('global-package-version');
```

### NPM Packages
You can check the version of any of your npm packages
```js
// package name is 'lodash'
globalPackageVersion(require('lodash/package.json'));

// You can type 'packageVersion' in browser console to check lodash Version
// => packageVersion = { lodash: '4.7.2'}
```

### Your own library
If you are building a library, you can set the version of your published package and your users will be able to check your package's version in their browser console.

Note: This won't affect/override any of your other variables/methods in your library.
```js
// ''../package.json' is the location of your package json
// libName will be your export
// example: import libName from 'libname';
globalPackageVersion(require('../package.json'), {
  wrapper: 'libName',
  customPackageName: 'version'
});

// Your users can type 'libName.version' in browser console to check your library version
// => libName.version = '1.7.0'
```

### Options
Pass in **options** param to give custom variable names

```js
// wrapper
globalPackageVersion(require('trim-right/package.json'),
  { wrapper: 'whichVersion' }
);
// => whichVersion = { trimRight: '1.2.3'}

// customPackageName
globalPackageVersion(require('trim-right/package.json'),
  { customPackageName: 'trimLibrary' }
);
// => packageVersion = { trimLibrary: '4.7.2'}

// both wrapper and customPackageName
globalPackageVersion(require('trim-right/package.json'), {
    wrapper: 'whichVersion',
    customPackageName: 'trimLibrary' }
);
// => whichVersion = { trimLibrary: '4.7.2'}
```

Multiple package versions can be set to global

```js
// should require each package separately
globalPackageVersion(require('lodash/package.json'));
globalPackageVersion(require('left-pad/package.json'));
/*
  packageVersion = {
    lodash: '4.7.2',
    leftPad: '2.1.0'
  }
*/
```

## License

MIT © Dineshkumar Pandiyan
