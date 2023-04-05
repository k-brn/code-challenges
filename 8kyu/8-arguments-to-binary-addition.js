// Arguments to Binary addition

/* URL
https://www.codewars.com/kata/57642a90dee2da8dd3000161
*/ 

/* INSTRUCTIONS

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

*/

// SOLUTION

function arr2bin(arr){
    // create a sum of number in array
    // convert sum to binary.
    let sumOfArray = arr.reduce((acc, curr) => typeof curr === 'number' ? acc += curr : acc += 0, 0);
    return sumOfArray.toString(2);
}

// TEST CASES

console.log(arr2bin([1,2])); //  "11"
console.log(arr2bin([1,2,3,4,5])); //  "1111"
console.log(arr2bin([1,10,100,1000])); //  "10001010111"
console.log(arr2bin([null])); //  "0"
console.log(arr2bin([true,true,false,15])); // "1111"