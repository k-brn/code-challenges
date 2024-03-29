// Remove all exclamation marks 4

/* URL
https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
*/

/* INSTRUCTIONS

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

*/

// SOLUTION

function remove(string) {
  // remove all exclmation marks from sentence
  // ensure exclamation mark is at the end of the string

  return string.replace(/!/g, "") + "!";
}

// TEST CASES

console.log(remove("Hi!")); // Hi!
console.log(remove("Hi!!!")); // Hi!
console.log(remove("!Hi")); // Hi!
console.log(remove("!Hi!")); // Hi!
console.log(remove("Hi! Hi!")); // Hi Hi!
console.log(remove("Hi")); // Hi!
