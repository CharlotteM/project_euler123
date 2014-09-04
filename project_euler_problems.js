/*Problem 1. If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the 
multiples of 3 or 5 below 1000.*/ 

var total = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        total += i;
    }
}

console.log(total)  //prints 233168

/*Problem 2. Each new term in the Fibonacci sequence is generated my adding the previous 
two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21,
34, 55 and 89. By considering the terms in the Fibonacci sequence whose values do not 
exceed four million, find the sum of the even-valued terms.*/

var num1 = 1;
var num2 = 2;
var sum = 0;
var total = 0;

while (num1 < 4000000) {

    if (num1 % 2 === 0) {
	    total += num1;
	}
	
	sum = num1 + num2;
	num1 = num2;
	num2 = sum;
	
}

console.log(total);    //prints 4613732

/*Problem 3. The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime 
factor of the number 600851475143?*/

var primeNumbers = [];
var x = 2; 

var findPrime = function (num) {
    while (num > 1) {
	    while (num % x === 0) {
		    primeNumbers.push(x);
			num /= x;
		}
		x += 1;
	}
	return primeNumbers[primeNumbers.length - 1];
};

console.log(findPrime(600851475143));    //prints 6857
