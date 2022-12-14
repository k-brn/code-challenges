// Stringy Strings

/* URL
https://www.codewars.com/kata/563b74ddd19a3ad462000054
*/ 

/* INSTRUCTIONS

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

// SOLUTION

function stringy(size) {
    let str = '';
    for (let i = 1; i <= size; i++){
        str += i % 2
    }
    return str;
}

// TEST CASES

console.log(stringy(6)); // '101010'
console.log(stringy(4)); // '1010'
console.log(stringy(12)); // '101010101010'