// Take the First N Elements

/* URL
https://www.codewars.com/kata/545afd0761aa4c3055001386
*/ 

/* INSTRUCTIONS

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

// SOLUTION

function take(arr, n) {
    // returns arr starting at index 0 and ends at index before n.
    return arr.slice(0,n);
}

// TEST CASES

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2]