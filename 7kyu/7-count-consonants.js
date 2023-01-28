// Count consonants

/* URL
https://www.codewars.com/kata/564e7fc20f0b53eb02000106
*/ 

/* INSTRUCTIONS

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

// SOLUTION

function consonantCount(str) {
    // remove all char from str that are not consonants.
  return str.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '')
  // return num count
  .length
}

// TEST CASES

console.log(consonantCount('')); // 0,
console.log(consonantCount('aaaaa')); // 0,
console.log(consonantCount('XaeiouX')); // 2
console.log(consonantCount('Bbbbb')); // 5
console.log(consonantCount('helLo world')); // 7
console.log(consonantCount('h^$&^#$&^elLo world')); // 7
console.log(consonantCount('0123456789')); // 0
console.log(consonantCount('012345_Cb')); // 2