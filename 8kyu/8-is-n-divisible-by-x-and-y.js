// Is n divisible by x and y?

/* URL
https://www.codewars.com/kata/5545f109004975ea66000086
*/ 

/* INSTRUCTIONS

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/

// SOLUTION

function isDivisible(n, x, y) {
    // check to see if n % x & n % y is = to 0. will return true or false.
    return n % x == 0 && n % y == 0;
}

// TEST CASES

console.log(isDivisible(3,3,4)); // false
console.log(isDivisible(12,3,4)); // true
console.log(isDivisible(8,3,4)); // false
console.log(isDivisible(48,3,4)); // true