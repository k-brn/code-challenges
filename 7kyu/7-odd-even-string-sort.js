// Odd-Even String Sort

/* URL
https://www.codewars.com/kata/580755730b5a77650500010c
*/

/* INSTRUCTIONS

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces

*/

// SOLUTION

function sortMyString(S) {
  let o = [...S].filter((x, i) => i % 2 === 0).join("");
  let e = [...S].filter((a, b) => b % 2).join("");

  return `${o} ${e}`;
}

// TEST CASES

console.log(sortMyString("CodeWars")); // "CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"
