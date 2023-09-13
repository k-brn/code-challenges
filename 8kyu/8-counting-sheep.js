// Counting sheep...

/* URL
https://www.codewars.com/kata/54edbc7200b811e956000556
*/

/* INSTRUCTIONS

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

*/

// SOLUTION

function countSheeps(sheep) {
  // filter method returns shallow copy of the array with all values that are (true)
  // and length will gives the total count of (true), in the array
  return sheep.filter(Boolean).length;
}

// TEST CASES

console.log(countSheeps([])); // 0
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // 2
