// Sum without highest and lowest number

/* URL
https://www.codewars.com/kata/576b93db1129fcf2200001e6
*/ 

/* INSTRUCTIONS

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

// SOLUTION

function sumArray(array) {
    // check if array is null or < 3 elements.
    if (array == null || array.length < 3) {
        // if yes, return Zero.
      return 0;
    }else{
        // sort arr from low to high, and slice off first and last number. sum all numbers
      return array.sort((a,b)=>a-b).slice(1,-1).reduce((x,y) => x + y);
    }
}

// TEST CASES

console.log(sumArray(null)); // 0
console.log(sumArray([ ])); // 0
console.log(sumArray([ 3 ])); // 0
console.log(sumArray([ 3, 5 ])); // 0
console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])); // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // -28
console.log(sumArray([ -6, 20, -1, 10, -12 ])); //3



