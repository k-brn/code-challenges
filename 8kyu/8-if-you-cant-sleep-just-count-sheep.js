// If you can't sleep, just count sheep!!

/* URL
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
*/ 

/* INSTRUCTIONS

If you can't sleep, just count sheep!!

Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

// SOLUTION

/*var countSheep = function (num){
    let result = '';

    for (let i = 1; i <= num; i++) {
        result += i + ' sheep...'
    }
    return result
}*/

var countSheep = function (num){
  
    let result = '';

    for (let i = 1; i <= num; i++){
      result += `${i} sheep...`;
    }
  
    return result;
}

// TEST CASES

console.log(countSheep(0)) // ""
console.log(countSheep(1)) // "1 sheep..."
console.log(countSheep(2)) // "1 sheep...2 sheep..."
console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."