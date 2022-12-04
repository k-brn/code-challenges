// Twice as old

/* URL
https://www.codewars.com/kata/5b853229cfde412a470000d0
*/ 

/* INSTRUCTIONS

Your function takes two arguments:

1. current father's age (years)

2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/

// SOLUTION

/*function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld > sonYearsOld * 2) {
      return dadYearsOld - (sonYearsOld * 2);
    }else{
      return (sonYearsOld * 2) - dadYearsOld;
    }
}*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// TEST CASES

console.log(twiceAsOld(36,7)); // 22
console.log(twiceAsOld(55,30)); // 5
console.log(twiceAsOld(42,21)); // 0
console.log(twiceAsOld(22,1)); // 20
console.log(twiceAsOld(29,0)); // 29