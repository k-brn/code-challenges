// All unique

/* URL
https://www.codewars.com/kata/553e8b195b853c6db4000048
*/ 

/* INSTRUCTIONS

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/

// SOLUTION

function hasUniqueChars(str){
    //return Array.from(new Set(str)).join('') == str;
     
     // new set removes doubles and .size returns the number of (unique) elements in a Set object. check if same as str length.
     return new Set(str).size == str.length;
}

// TEST CASES

console.log(hasUniqueChars("  nAa")); // false
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aA")); // true
console.log(hasUniqueChars("++-")); // false