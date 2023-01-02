// Combine strings

/* URL
https://www.codewars.com/kata/55f73f66d160f1f1db000059
*/ 

/* INSTRUCTIONS

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

*/

// SOLUTION

function combineNames(fn,ln) {
    // first name + space + last name.
    return fn + ' ' + ln;
}

// TEST CASES

console.log(combineNames('James', 'Stevens')); // 'James Stevens'