// Move all vowels

/* URL
https://www.codewars.com/kata/56bf3287b5106eb10f000899
*/ 

/* INSTRUCTIONS

Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples

"day"    ==>  "dya"
"apple"  ==>  "pplae"

*/

// SOLUTION

function moveVowel(input) {
    // returns str without vowels.
    return input.replace(/[aeiou]/g, '') 
    // concats only vowels from original str to end.
    + input.replace(/[^aeiou]/g, '');
}

// TEST CASES

console.log(moveVowel("day")); // "dya"
console.log(moveVowel("apple")); // "pplae"
console.log(moveVowel("peace")); // "pceae"
console.log(moveVowel("maker")); // "mkrae"