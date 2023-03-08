// Be Concise IV

/* URL
https://www.codewars.com/kata/5703c093022cd1aae90012c9
*/ 

/* INSTRUCTIONS

Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

*/

// SOLUTION

function find(a, e) {
    // return index of element in array, if -1 the element is not in array.  
    return a.indexOf(e) === -1 ? 'Not found' : a.indexOf(e);
}

// TEST CASES

console.log(find([2,3,5,7,11], 5)); // 2
console.log(find([2,3,5,7,11], 11)); // 4
console.log(find([2,3,5,7,11], 3)); // 1
console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Hello World")); // 1
console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "lorem ipsum")); // "Not found"
console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Lorem Ipsum")); // 3
console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], false)); // 2