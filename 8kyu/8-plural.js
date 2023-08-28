// Plural

/* URL
https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
*/

/* INSTRUCTIONS

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

*/

// SOLUTION

function plural(n) {
  // check to see if num is not equal to 1
  return n !== 1;
}

// TEST CASES

console.log(plural(0)); // true
console.log(plural(0.5)); // true
console.log(plural(1)); // false
console.log(plural(100)); // true
console.log(plural(Infinity)); // true
