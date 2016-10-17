'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sumOfPrimes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10 for prime numbers between 1 to 5", function() {
    assert(
      lib.sumOfPrimes(5) ==  10
    );
  });
  it("should give 17 for prime numbers between 1 to 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
  });
  it("should give 58 for prime numbers between 1 to 17", function() {
    assert(
      lib.sumOfPrimes(17) == 58
    );
  });

  it("should give 77 for prime numbers between 1 to 19", function() {
    assert(
      lib.sumOfPrimes(19) == 77
    );
  });

  it("should return false if the input parameter is zero", function() {
    assert(
      lib.sumOfPrimes(0) == false
    );
  });

  it("should return false if the input parameter is a string", function() {
    assert(
      lib.sumOfPrimes('string') == false
    );
  });

  it("should return false if the input parameter is a dictionary", function() {
    assert(
      lib.sumOfPrimes({title: "name"}) == false
    );
  });

});