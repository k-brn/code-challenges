// Return Two Highest Values in List

/* URL
https://www.codewars.com/kata/57ab3c09bb994429df000a4a
*/ 

/* INSTRUCTIONS

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/

// SOLUTION

function twoHighest(arr) {
    // filter out all duplicates.
    return arr.filter((i,x) => arr.indexOf(i) === x)
    // sort nums from high to low.
      .sort((a,b)=>b-a)
    // slice first two nums.
      .slice(0,2);
}

// TEST CASES

console.log(twoHighest([])); // []
console.log(twoHighest([15])); // [15]
console.log(twoHighest([15, 20, 20, 17])); // [20, 17]