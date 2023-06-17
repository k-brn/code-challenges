// Sorting Arrays

/* URL
https://www.codewars.com/kata/57fe864854685b1c420002e0
*/

/* INSTRUCTIONS

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

*/

// SOLUTION

function sortArray(a1, a2) {
  let r = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j][0] === a1[i][0]) {
        r.push(a2[j]);
      }
    }
  }
  return r;
}

// TEST CASES

console.log(
  sortArray(
    ["giraffe", "orangutan", "impala", "elephant", "rhino"],
    ["rattlesnake", "eagle", "geko", "iguana", "octopus"]
  )
); // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
