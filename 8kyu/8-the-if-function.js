// The 'if' function

/* URL
https://www.codewars.com/kata/54147087d5c2ebe4f1000805
*/

/* INSTRUCTIONS

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

*/

// SOLUTION

function _if(bool, func1, func2) {
  if (bool) {
    return func1();
  } else {
    return func2();
  }
}

// TEST CASES

console.log(
  _if(
    true,
    () => "func1 called",
    () => "func2 called"
  )
); // Output should be "func1 called"
console.log(
  _if(
    false,
    () => "func1 called",
    () => "func2 called"
  )
); // Output should be "func2 called"
console.log(
  _if(
    1,
    () => "func1 called",
    () => "func2 called"
  )
); // Output should be "func1 called"
