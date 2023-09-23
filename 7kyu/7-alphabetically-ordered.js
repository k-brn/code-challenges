// Alphabetically ordered

/* URL
https://www.codewars.com/kata/5a8059b1fd577709860000f6
*/

/* INSTRUCTIONS

Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)

"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)


*/

// SOLUTION

function alphabetic(s) {
  return s === s.split("").sort().join("");
}

// TEST CASES

console.log(alphabetic("asd")); // false
console.log(alphabetic("codewars")); // false
console.log(alphabetic("door")); // true
console.log(alphabetic("cell")); // true
console.log(alphabetic("z")); // true
console.log(alphabetic("")); // true
