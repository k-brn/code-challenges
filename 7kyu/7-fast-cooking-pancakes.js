// Fast cooking pancakes

/* URL
https://www.codewars.com/kata/58552bdb68b034a1a80001fb
*/

/* INSTRUCTIONS

You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.

*/

// SOLUTION

function cookPancakes(n, m) {
  // check if number of pancakes is < space in pan
  // if under return 2
  //else, returns number of pancakes / pan space * 2
  return n < m ? 2 : Math.ceil((n / m) * 2);
}

// TEST CASES

console.log(cookPancakes(1, 2), 2);
console.log(cookPancakes(2, 2), 2);
console.log(cookPancakes(4, 2), 4);
