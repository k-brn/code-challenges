// Name Array Capping

/* URL
https://www.codewars.com/kata/5356ad2cbb858025d800111d
*/ 

/* INSTRUCTIONS

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

*/

// SOLUTION

function capMe(names) {
    // takes first letter and changes to UpperCase. and concats name minus first letter and converts all letters to LowerCase.
    return names.map(a=>a[0].toUpperCase()+a.slice(1).toLowerCase());
}

// TEST CASES

console.log(capMe(['jo', 'nelson', 'jurie'])); // ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])); // ['Karly', 'Daniel', 'Kelsey']