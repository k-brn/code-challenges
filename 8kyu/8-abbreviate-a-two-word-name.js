// Abbreviate a Two Word Name

/* URL
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
*/ 

/* INSTRUCTIONS

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

// SOLUTION

function abbrevName(name){
// takes str and split name (first and last).
    return name.split(' ')
// returns first char of name and changes to uppercase.
    .map(a=>a.toUpperCase()[0])
// joins names togther with a period mark.
    .join('.');
}

// TEST CASES

console.log(abbrevName("Sam Harris")); // "S.H"
console.log(abbrevName("Patrick Feenan")); // "P.F"
console.log(abbrevName("Evan Cole")); // "E.C"
console.log(abbrevName("P Favuzzi")); // "P.F"
console.log(abbrevName("David Mendieta")); // "D.M"