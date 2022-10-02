// Reverse List Order

/* URL
https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
*/ 

/* INSTRUCTIONS

In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)

* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

// SOLUTION

function reverseList(list) {
    return list.reverse();
}

// TEST CASES

console.log(reverseList([1,2,3,4])); // [4,3,2,1]
console.log(reverseList([3,1,5,4])); // [4,5,1,3]
console.log(reverseList([2,4,6,8])); // [8,6,4,2]