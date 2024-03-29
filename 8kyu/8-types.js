// Types

/* URL
https://www.codewars.com/kata/59c1302ecb7fb48757000013
*/ 

/* INSTRUCTIONS

Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:

42, "number"   --> true
"42", "number" --> false

*/

// SOLUTION

function typeValidation(variable, type) {
    // returns the data type of variable and then compares equality to type.
    return typeof variable === type;
}

// TEST CASES

console.log(typeValidation(42, "number")); // true
console.log(typeValidation("42", "number")); // false