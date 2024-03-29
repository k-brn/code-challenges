// Potenciation

/* URL
https://www.codewars.com/kata/59fc72fe235f93838b002235
*/ 

/* INSTRUCTIONS

The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

*/

// SOLUTION

function power(x,y){
    return x**y;
}

// TEST CASES

console.log(power(1,701270)); // 1
console.log(power(2,2)); // 4
console.log(power(3,2)); // 9
console.log(power(-1,40)); // 1