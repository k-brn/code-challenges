// Tail Swap

/* URL
https://www.codewars.com/kata/5868812b15f0057e05000001
*/

/* INSTRUCTIONS

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

*/

// SOLUTION

function tailSwap(arr) {
  // split each string at " : "
  let newArr = arr.map((string) => string.split(":"));
  // return value based on index
  return [newArr[0][0] + ":" + newArr[1][1], newArr[1][0] + ":" + newArr[0][1]];
}

// TEST CASES

console.log(tailSwap(["abc:123", "cde:456"])); // ['abc:456', 'cde:123']
console.log(tailSwap(["a:12345", "777:xyz"])); // ['a:xyz', '777:12345']
