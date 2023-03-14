// Sum of positive

/* URL
https://www.codewars.com/kata/5715eaedb436cf5606000381
*/ 

/* INSTRUCTIONS

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// SOLUTION

/*function positiveSum(arr) {
    let positiveArray = arr.filter(num => num > 0);
    
    if (positiveArray > []) {
      return positiveArray.reduce((acc, curr) => acc + curr);
    } else {
      return 0;
    }
}*/

function positiveSum(arr) {
    return arr.reduce((acc, curr)=> acc + (curr > 0 ? curr : 0),0)
}

// TEST CASES

console.log(positiveSum([1,2,3,4,5])); // 15
console.log(positiveSum([1,-2,3,4,5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1,-2,-3,-4,-5])); // 0
console.log(positiveSum([-1,2,3,4,-5])); // 9