// Quarter of the year

/* URL
https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
*/ 

/* INSTRUCTIONS

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


*/

// SOLUTION

const quarterOf = (month) => {

// January(1), February(2), and March(3) = Q1
// April(4), May(5), and June(6) = Q2
// July(7), August(8), and September(9) = Q3
// October(10), November(11), and December(12) = Q4
 
return (month >= 10) ? 4 : (month >= 7) ? 3 : (month >= 4) ? 2 : 1

}

// TEST CASES

console.log(quarterOf(3)) // 1
console.log(quarterOf(8)) // 3
console.log(quarterOf(11)) // 4