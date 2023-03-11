// Calculate average

/* URL
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
*/ 

/* INSTRUCTIONS

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// SOLUTION

function findAverage(array) {
    return array.length ? 
      // if any value in array, return avrage.
    array.reduce((acc,curr)=>acc+curr)/array.length : 0;
}

// TEST CASES

console.log(findAverage([1,1,1])); // 1
console.log(findAverage([1,2,3])); // 2
console.log(findAverage([1,2,3,4])); // 2.5
console.log(findAverage([])); // 0