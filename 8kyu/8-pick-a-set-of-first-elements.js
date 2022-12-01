// pick a set of first elements

/* URL
https://www.codewars.com/kata/572b77262bedd351e9000076
*/ 

/* INSTRUCTIONS

Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

*/

// SOLUTION

/*function first(arr, n) {
    if (n == undefined) {
     return arr.slice(0,1)
    }else{
      return arr.slice(0,n)
    }
}*/

const first = (arr, n = 1) => arr.slice(0,n);

// TEST CASES

assert.sameOrderedMembers(first(arr)); // ['a']
assert.sameOrderedMembers(first(arr, 2)); // ['a', 'b']