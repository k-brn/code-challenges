// Replace all vowel to exclamation mark in the sentence.

/* URL
https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
*/ 

/* INSTRUCTIONS

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

*/

// SOLUTION

function replace(s){
  // replace all vowels 'a,e,i,o,u' with '!'
  return s.replace(/[aeiou]/gi, '!');
}

// TEST CASES

console.log(replace("Hi!")); // "H!!"
console.log(replace("!Hi! Hi!")); // "!H!! H!!"
console.log(replace("aeiou")); // "!!!!!"
console.log(replace("ABCDE")); // "!BCD!"