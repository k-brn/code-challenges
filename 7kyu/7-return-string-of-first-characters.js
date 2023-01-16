// Return String of First Characters

/* URL
https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
*/ 

/* INSTRUCTIONS

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/

// SOLUTION

function makeString(s){
    // split string into words.
    return s.split(' ')
    // make copy but only first char or each word, join for result.
    .map(a => a[0]).join('');
}

// TEST CASES

console.log(makeString("sees eyes xray yoat")); // "sexy"
console.log(makeString("brown eyes are nice")); // "bean"
console.log(makeString("cars are very nice")); // "cavn"
console.log(makeString("kaks de gan has a big head")); // "kdghabh"