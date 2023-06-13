// Surface Area and Volume of a Box

/* URL
https://www.codewars.com/kata/565f5825379664a26b00007c
*/

/* INSTRUCTIONS

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

// SOLUTION

function getSize(width, height, depth) {
  let surfaceArea = 2 * (depth * width + depth * height + width * height);
  let area = width * height * depth;

  return [surfaceArea, area];
}

// TEST CASES

console.log(getSize(4, 2, 6)); // [88, 48]
console.log(getSize(10, 10, 10)); // [600, 1000]
