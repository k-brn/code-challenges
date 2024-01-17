// Exes and Ohs

/* URL
https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

/* INSTRUCTIONS

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

*/

// SOLUTION

function XO(str) {
  const lowerStr = str.toLowerCase();

  const countX = (lowerStr.match(/x/g) || []).length;
  const countO = (lowerStr.match(/o/g) || []).length;

  return countX === countO;
}

// TEST CASES

comsole.log(XO("xo")); // true
comsole.log(XO("xxOo")); // true
comsole.log(XO("xxxm")); // false
comsole.log(XO("Oo")); // false
comsole.log(XO("ooom")); // false
