import { assert } from 'chai';
import globalPackageVersion from '../src';

describe('Global Package Version', () => {

  beforeEach(() => {
    global.window = {}
  });

  it('should set global package version of npm package', () => {
    globalPackageVersion(require('acorn/package.json'));
    assert(global.packageVersion.acorn === require('acorn/package.json').version, 'global package version didn\'t work :(');
  });

  it('should set global package version of current project', () => {
    globalPackageVersion(require('../package.json'));
    assert(global.packageVersion.globalPackageVersion === require('../package.json').version, 'current project package version didn\'t work :(');
  });

  it('should set version in global when window is not available', () => {
    globalPackageVersion(require('acorn/package.json'));
    global.window = null;
    assert(global.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in global');
  });

  // TODO - Need to figure out dom stubbing
  it.skip('should set version in window object when available', () => {
    globalPackageVersion(require('acorn/package.json'));
    assert(global.window.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in window');
    assert(global.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in global');
  });

  it('should convert hyphen-case package name to camelCase package name', () => {
    globalPackageVersion(require('align-text/package.json'));
    assert(global.packageVersion.alignText === require('align-text/package.json').version, 'hyphen-case to camelCase didn\'t work :(');
  });

  it('should set custom wrapper name in global/window object', () => {
    globalPackageVersion(require('../package.json'), {wrapper: 'myOwnVar'});
    assert(global.myOwnVar.globalPackageVersion === require('../package.json').version, 'custom wrapper name didn\'t work :(');
  });

  it('should set custom package name in wrapper object', () => {
    globalPackageVersion(require('../package.json'), {customPackageName: 'myOwnPackageName'});
    assert(global.packageVersion.myOwnPackageName === require('../package.json').version, 'custom package name didn\'t work :(');
  });

});
