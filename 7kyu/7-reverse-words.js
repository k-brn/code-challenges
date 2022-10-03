// Reverse words  

/* URL
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
*/ 

/* INSTRUCTIONS

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// SOLUTION

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// TEST CASES

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); // 'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'