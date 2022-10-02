// Remove exclamation marks

/* URL
https://www.codewars.com/kata/57a0885cbb9944e24c00008e
*/ 

/* INSTRUCTIONS

Write function RemoveExclamationMarks which removes all exclamation marks from a given string. 

*/

// SOLUTION

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

// TEST CASES

console.log(removeExclamationMarks("Hello World!")); // "Hello World")
console.log(removeExclamationMarks("How dare you copy my answers!")); // "How dare you copy my answers"
console.log(removeExclamationMarks("You're supposed to use two coats of paint, not one!")); // "You’re supposed to use two coats of paint, not one"
console.log(removeExclamationMarks("No! I forgot my homework again!")); // "No I forgot my homework again"