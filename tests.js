'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, 4 for constants 2, 5 as a and n respectively", function() {
    assert(
      lib.sum_of_primes(5) ==  10)
    );
  });
  it("should give 2, 1 for constants 1, 2 as a and n respectively", function() {
    assert(
      lib.sum_of_primes(10) == 17)
    );
  });
  it("should give 8, 1 for constants 4, 2 as a and n respectively", function() {
    assert(
      lib.sumof_primes(17) == 23)
    );
  });
});