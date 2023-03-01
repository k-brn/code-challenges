// get ascii value of character

/* URL
https://www.codewars.com/kata/55acfc59c3c23d230f00006d
*/ 

/* INSTRUCTIONS

Write a simple regex to validate a username. Allowed characters are:
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/

*/

// SOLUTION

function getASCII(c){
    return c.charCodeAt();
}

// TEST CASES

console.log(getASCII('A')); // 65
console.log(getASCII(' ')); // 32
console.log(getASCII('!')); // 33