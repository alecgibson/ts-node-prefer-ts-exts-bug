import {expect} from "chai";
import {objectIDType} from "./object-id-type";

describe('objectIDType', () => {
  it('test', () => {
    expect(objectIDType()).to.be.true;
  })
});
