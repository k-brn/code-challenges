// Is this a triangle?

/* URL
https://www.codewars.com/kata/56606694ec01347ce800001b
*/ 

/* INSTRUCTIONS

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

// SOLUTION

function isTriangle(a,b,c) {
// two sides must be > third side.
// a + b > c || a + c > b || b + c > a
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }else {
    return true;
  }
}

// TEST CASES

console.log(isTriangle(1,2,2)); // true
console.log(isTriangle(7,2,2)); // false