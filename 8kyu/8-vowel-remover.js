// Vowel remover

/* URL
https://www.codewars.com/kata/5547929140907378f9000039
*/ 

/* INSTRUCTIONS

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

// SOLUTION

function shortcut (string) {
    return string.replace(/[aeiou]/g, '')
}
     
// TEST CASES

console.log(shortcut('hello')) // 'hll'
console.log(shortcut('how are you today?')) // 'hw r y tdy?'
console.log(shortcut('complain')) // 'cmpln'
console.log(shortcut('never')) // 'nvr' 