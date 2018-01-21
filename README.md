# Global Package Version [![Build Status](https://travis-ci.org/flexdinesh/global-package-version.svg?branch=master)](https://travis-ci.org/flexdinesh/global-package-version) [![dependencies Status](https://david-dm.org/flexdinesh/global-package-version/status.svg)](https://david-dm.org/flexdinesh/global-package-version) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Look up the version of one or more npm packages in browser console.

This library exposes the package version in a global variable so it can be accessed anywhere in your code.

## Install

```
$ npm install --save global-package-version
```

## Usage

ES6 style import
```js
/* ES6 import */
import globalPackageVersion from 'global-package-version';

globalPackageVersion(require('lodash/package.json'));

// You can type 'packageVersion' in browser console to check lodash Version
// => packageVersion = { lodash: '4.7.2'}
```
ES5 style import
```js
var globalPackageVersion = require('global-package-version');

globalPackageVersion(require('lodash/package.json'));

// You can type 'packageVersion' in browser console to check lodash Version
// => packageVersion = { lodash: '4.7.2'}
```

Pass in **options** param to give custom variable names

```js
/* wrapper */
globalPackageVersion(
  require('lodash/package.json'),
  { wrapper: 'whatVersion' }
);
// => whatVersion = { lodash: '4.7.2'}

/* customPackageName */
globalPackageVersion(
  require('lodash/package.json'),
  { customPackageName: 'lodashLibrary' }
);
// => packageVersion = { lodashLibrary: '4.7.2'}

/* Both wrapper and customPackageName */
globalPackageVersion(
  require('lodash/package.json'),
  {
    wrapper: 'whatVersion',
    customPackageName: 'lodashLibrary' }
);
// => whatVersion = { lodashLibrary: '4.7.2'}
```

Multiple package versions can be set to global

```js
/* Should require each package separately */
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
