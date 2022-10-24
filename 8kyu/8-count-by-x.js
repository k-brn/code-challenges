// Count by X

/* URL
https://www.codewars.com/kata/5513795bd3fafb56c200049e
*/ 

/* INSTRUCTIONS

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

// SOLUTION

function countBy(x, n) {
    // creates empty arr
    let z = [];
    // loop starting a 1 up till (n) times
    for (i = 1; i <= n; i++) {
        // push value into z , multi by x
        z.push(x * i)
    }
    return z;
}

// TEST CASES

console.log(countBy(1,10)) // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)) // [2,4,6,8,10]