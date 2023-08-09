// Count of positives / sum of negatives

/* URL
https://www.codewars.com/kata/576bb71bbbcf0951d5000044
*/

/* INSTRUCTIONS

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// SOLUTION

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  let posNum = 0;
  let negNum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posNum++;
    } else {
      negNum += input[i];
    }
  }

  return [posNum, negNum];
}

// TEST CASES

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]
