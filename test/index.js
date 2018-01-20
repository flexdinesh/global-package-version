import { assert } from 'chai';
import { globalizeCurrentPackageVersion } from '../src';

describe('Global Package Version', () => {

  before(() => {
    global.window = {}
  });

  it('should globalize package version', () => {
    globalizeCurrentPackageVersion();
    assert(global.window.packageVersion.global_package_version === '1.0.0' , 'globalize package version didn\'t work :(');
  });

  after(() => {
    // console.log(global.window);
  });

});
