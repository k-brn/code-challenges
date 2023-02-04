// Two to One

/* URL
https://www.codewars.com/kata/5656b6906de340bd1b0000ac
*/ 

/* INSTRUCTIONS

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

// SOLUTION

function longest(s1, s2) {
    // creates new set that removes all duplicates from array. also add both strings togther inside the prams.
   return [...new Set(s1+s2)]
    // sorts from a-z.
     .sort()
    // joins string to form one string.
     .join('');
}

// TEST CASES

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"