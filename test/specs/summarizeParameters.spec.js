/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`scenarios for summarizeParameters`, function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should summarize parameters and return the result`, function() {
    expect(validator.summarizeParameters(5, 10)).to.be.equal(15);
  });

  it(`should return an error if any of parameters is not a Number`, function() {
    expect(() => validator.summarizeParameters(5, 'g'))
        .to.throw(Error).with.property('message', 'Please enter numbers only');
  });
});
