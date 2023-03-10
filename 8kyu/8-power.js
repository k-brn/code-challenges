// Power

/* URL
https://www.codewars.com/kata/562926c855ca9fdc4800005b
*/ 

/* INSTRUCTIONS

The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.

*/

// SOLUTION

function numberToPower(number, power) {
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total *= number;
    }
    return total;
}

// TEST CASES

console.log(numberToPower(4, 2)); // 16
console.log(numberToPower(10, 4)); // 10000
console.log(numberToPower(10, 0)); // 1