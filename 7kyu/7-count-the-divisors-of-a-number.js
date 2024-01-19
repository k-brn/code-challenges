// Count the divisors of a number

/* URL
https://www.codewars.com/kata/542c0f198e077084c0000c2e
*/

/* INSTRUCTIONS

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

*/

// SOLUTION

function getDivisorsCnt(n) {
  let divisors = 0;

  // Iterate from 1 to the square root of n
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // Check if i is a divisor of n
    if (n % i === 0) {
      // If i and n/i are the same, count only one divisor, otherwise count both
      divisors += i === n / i ? 1 : 2;
    }
  }

  return divisors;
}

// TEST CASES

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8
