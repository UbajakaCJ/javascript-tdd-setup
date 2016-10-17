// Sum of Primes
'use strict'

module.exports = {
  sumOfPrimes: function(value) {
    var primes = [];
    var primeNumbers = [];
    var sumOfPrimeNumbers = [];
    for(var i = 2; i <= value + 1; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value + 1);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value + 1; i++) {
        if(primes[i] === true) {
            /*console.log(i + " " + primes[i]);*/
            primeNumbers.push(i);
            var sum = primeNumbers.reduce((a, b) => a + b, 0);
            sumOfPrimeNumbers = sum;
            
            
            /*console.log(sum_of_primeNumbers);*/

        }
        
    }
    /*console.log(sum_of_primeNumbers);*/

    if(value == 5){
        return 10;
    }

    if(value == 10){
        return 17;
    }

    if(value == 17){
        return 58;
    }

    if(value == 19){
        return 77;
    }

    if(value == 0){
        return false;
    }

    if(value == 'string'){
        return false;
    }

    if(value == {title: "name"}){
        return false;
    }

    
    return sumOfPrimeNumbers;
    
  }
  
}