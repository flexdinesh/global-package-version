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
    assert(global.packageVersion.global_package_version === require('../package.json').version, 'current project package version didn\'t work :(');
  });

  it('should set version in global when window is not available', () => {
    globalPackageVersion(require('acorn/package.json'));
    global.window = null;
    assert(global.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in global');
  });

  it('should set version in window object when available', () => {
    globalPackageVersion(require('acorn/package.json'));
    assert(global.window.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in window');
    assert(global.packageVersion.acorn === require('acorn/package.json').version, 'package version not set in global');
  });

  it('should replace hyphens in package name with underscore', () => {
    globalPackageVersion(require('align-text/package.json'));
    assert(global.packageVersion.align_text === require('align-text/package.json').version, 'replace hyphens with underscore didn\'t work :(');
  });

  it('should set custom variable name in global/window object', () => {
    globalPackageVersion(require('../package.json'), {wrapperVariableName: 'myOwnVar'});
    assert(global.myOwnVar.global_package_version === require('../package.json').version, 'custom variable name didn\'t work :(');
  });

});
