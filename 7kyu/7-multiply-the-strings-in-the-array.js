// Multiply the strings in the array

/* URL
https://www.codewars.com/kata/59b2963132779166d2001018
*/ 

/* INSTRUCTIONS

You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'

*/

// SOLUTION

function arrMultiply(arr){
    // returns copy of array as numbers.
    return arr.map(Number)
    // reduce all numbers in array (multiply them).
      .reduce((a,b)=> a * b)
    // converts back to string.
      .toString();  
}

// TEST CASES

console.log(arrMultiply(['4','5'])); // "20"
console.log(arrMultiply(['2','-5'])); // "-10"
console.log(arrMultiply(['9','0'])); // "0"