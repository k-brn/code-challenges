// Compare within margin

/* URL
https://www.codewars.com/kata/56453a12fcee9a6c4700009c
*/

/* INSTRUCTIONS

Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0

*/

// SOLUTION

function closeCompare(a, b, margin) {
  if (margin === undefined) {
    margin = 0;
  }

  if (margin >= Math.abs(a - b)) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

// TEST CASES

console.log(closeCompare(4, 5)); // -1
console.log(closeCompare(5, 5)); // 0
console.log(closeCompare(6, 5)); // 1
console.log(closeCompare(8.1, 5, 3)); // 1
console.log(closeCompare(1.99, 5, 3)); // -1
