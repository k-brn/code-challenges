// Are arrow functions odd?

/* URL
https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
*/ 

/* INSTRUCTIONS

Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/

// SOLUTION

function odds(values){
    // removes numbers that even by checking if the number mod 2 = 0.
    return values.filter(num => num % 2 !== 0);
}

// TEST CASES

console.log(odds([])); // []
console.log(odds([2, 4, 6])); // []
console.log(odds([1, 3, 5])); // [1, 3, 5]
console.log(odds([1, 2, 3, 4, 5, 6])); // [1, 3, 5]