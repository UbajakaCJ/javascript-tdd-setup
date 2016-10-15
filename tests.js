'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10 for prime numbers between 1 to 5", function() {
    assert(
      lib.sum_of_primes(5) ==  10)
    );
  });
  it("should give 17 for prime numbers between 1 to 10", function() {
    assert(
      lib.sum_of_primes(10) == 17)
    );
  });
  it("should give 58 for prime numbers between 1 to 17", function() {
    assert(
      lib.sum_of_primes(17) == 58)
    );
  });

  it("should return an empty list if the input parameter is zero", function() {
    assert(
      lib.sum_of_primes(0) == [])
    );
  });

  it("should return an empty list if the input parameter is a string", function() {
    assert(
      lib.sum_of_primes('string') == [])
    );
  });

});