// Remove an exclamation mark from the end of string

/* URL
https://www.codewars.com/kata/57fae964d80daa229d000126
*/ 

/* INSTRUCTIONS

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples

remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

*/

// SOLUTION

function remove (string) {
    return string.replace(/!$/, '');
}

// TEST CASES

console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi!!"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("Hi! Hi!")) // "Hi! Hi"
console.log(remove("Hi")) // "Hi"