// Get number from string

/* URL
https://www.codewars.com/kata/57a37f3cbb99449513000cd8
*/

/* INSTRUCTIONS

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

*/

// SOLUTION

function getNumberFromString(s) {
  // remove all chars that are not 0-9, returns as number. not string.
  return Number(s.replace(/[^0-9]/g, ""));
}

// TEST CASES

console.log(getNumberFromString("1")); // 1
console.log(getNumberFromString("123")); // 123
console.log(getNumberFromString("this is number: 7")); // 7
