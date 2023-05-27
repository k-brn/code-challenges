// Array plus array

/* URL
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
*/ 

/* INSTRUCTIONS

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

// SOLUTION

function arrayPlusArray(arr1, arr2) {
    // concat both arr1 and arr2 and reduce the sum.
    return arr1.concat(arr2).reduce((acc, curr) => acc + curr);
}

// TEST CASES

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100