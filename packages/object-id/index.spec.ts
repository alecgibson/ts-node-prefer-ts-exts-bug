import {expect} from 'chai';
import {isObjectId} from '.';

describe('test', () => {
  it('returns true', () => {
    expect(isObjectId()).to.be.true;
  });
});
