// Covfefe

/* URL
https://www.codewars.com/kata/592fd8f752ee71ac7e00008a
*/ 

/* INSTRUCTIONS

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.


*/

// SOLUTION

function covfefe(str){
    // if str includes 'coverage', replace with 'covfefe'
    return str.includes('coverage') ? str.replace(/coverage/g, 'covfefe')
    // if not concat 'covfefe' to the str.
    : str.concat(' covfefe');
}

// TEST CASES

console.log(covfefe("coverage")); // "covfefe"
console.log(covfefe("coverage coverage")); // "covfefe covfefe"
console.log(covfefe("nothing")); // "nothing covfefe"
console.log(covfefe("double space ")); // "double space  covfefe"
console.log(covfefe("covfefe")); // "covfefe covfefe"