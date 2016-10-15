// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sum_of_primes: function(value) {
    var primes = [];
    var primeNumbers = [];
    var sum_of_primeNumbers = [];
    for(var i = 2; i <= value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            /*console.log(i + " " + primes[i]);*/
            primeNumbers.push(i)
            var sum = primeNumbers.reduce((a, b) => a + b, 0);
            sum_of_primeNumbers = sum;
            
            
            /*console.log(sum_of_primeNumbers);*/

        }
        
    }
    /*console.log(sum_of_primeNumbers);*/
    return sum_of_primeNumbers;
    
  }
  
}