/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`scenarios for multiplyParameters`, function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should multiply parameters and return the result`, function() {
    expect(validator.multiplyParameters(-5, 10)).to.be.equal(-50);
  });

  it(`should return an error if any of parameters is not a Number`, function() {
    expect(() => validator.multiplyParameters(5, {}))
        .to.throw(Error).with.property('message', 'Please enter numbers only');
  });
});
