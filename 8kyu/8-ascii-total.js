// ASCII Total

/* URL
https://www.codewars.com/kata/572b6b2772a38bc1e700007a
*/ 

/* INSTRUCTIONS

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

*/

// SOLUTION

function uniTotal (string) {
    
    return string <= [] ? 0 : string.split('').map(char=>char.charCodeAt()).reduce((acc, curr)=>acc+curr);
}

// TEST CASES

console.log(uniTotal("")); // 0
console.log(uniTotal("a")); // 97
console.log(uniTotal("b")); // 98
console.log(uniTotal("c")); // 99
console.log(uniTotal("d")); // 100
console.log(uniTotal("e")); // 101
console.log(uniTotal("aaa")); // 291
console.log(uniTotal("Mary Had A Little Lamb")); // 1873