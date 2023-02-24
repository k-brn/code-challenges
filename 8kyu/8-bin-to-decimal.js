// Bin to Decimal

/* URL
https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
*/ 

/* INSTRUCTIONS

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

// SOLUTION

function binToDec(bin){
    return parseInt(bin,2);
}

// TEST CASES

console.log(bin('1')); // 1
console.log(bin('0')); // 0
console.log(bin('1001001')); // 73