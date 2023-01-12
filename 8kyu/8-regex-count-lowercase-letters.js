// Regex count lowercase letters

/* URL
https://www.codewars.com/kata/56a946cd7bd95ccab2000055
*/ 

/* INSTRUCTIONS

Your task is simply to count the total number of lowercase letters in a string.

Examples

lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

*/

// SOLUTION

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, '').length;
}

// TEST CASES

console.log(lowercaseCount("abc")); // 3
console.log(lowercaseCount("abcABC123")); //, 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // 3
console.log(lowercaseCount("")); // 0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); // 26