import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('Github action using environments test', () => {
  it('should not be undefined', () => {
    expect(process.env.TEST_ENV).to.not.be.undefined;
  });
  it('should be equal to "TEST"', () => {
    expect(process.env.TEST_ENV).to.equal('TEST');
  });
});
