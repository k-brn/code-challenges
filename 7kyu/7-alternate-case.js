// Alternate case

/* URL
https://www.codewars.com/kata/57a62154cf1fa5b25200031e
*/ 

/* INSTRUCTIONS

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

*/

// SOLUTION

function alternateCase(s) {
    return s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
}

// TEST CASES

console.log(alternateCase("abc")); // "ABC"
console.log(alternateCase("ABC")); // "abc"
console.log(alternateCase("Hello World")); // "hELLO wORLD"