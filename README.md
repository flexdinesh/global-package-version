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

ES6 style import
```js
import globalPackageVersion from 'global-package-version';

// package name is 'lodash'
globalPackageVersion(require('lodash/package.json'));

// You can type 'packageVersion' in browser console to check lodash Version
// => packageVersion = { lodash: '4.7.2'}
```
ES5 style import
```js
var globalPackageVersion = require('global-package-version');

globalPackageVersion(require('moment/package.json'));

// You can type 'packageVersion' in browser console to check lodash Version
// => packageVersion = { moment: '2.1.0'}
```

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
