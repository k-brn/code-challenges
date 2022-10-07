// Is the string uppercase?

/* URL
https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
*/ 

/* INSTRUCTIONS

Is the string uppercase?

Task

Create a method to see whether the string is ALL CAPS.

Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

*/

// SOLUTION

String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase()
}

// TEST CASES

console.log('Hello World'.isUpperCase()) // false
console.log('hello world'.isUpperCase()) // false
console.log('Hello world'.isUpperCase()) // false
console.log('hello World'.isUpperCase()) // false
console.log('HELLO WORLD'.isUpperCase()) // true
console.log('Bob walks his dog every day.'.isUpperCase()) // false
console.log('BOB walks his dog every day.'.isUpperCase()) // false
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase()) // true
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase()) // false
    