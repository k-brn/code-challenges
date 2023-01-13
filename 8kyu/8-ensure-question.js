// Ensure question

/* URL
https://www.codewars.com/kata/5866fc43395d9138a7000006
*/ 

/* INSTRUCTIONS

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

*/

// SOLUTION

/*function ensureQuestion(s) {
    if (s.slice(-1) !== '?'){
      return s + '?';
    } else {
      return s;
    }
}*/

function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?';
}

// TEST CASES

console.log(ensureQuestion("")); // "?"
console.log(ensureQuestion("Yes")); // "Yes?"
console.log(ensureQuestion("No?")); // "No?"