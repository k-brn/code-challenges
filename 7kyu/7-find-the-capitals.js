// Find the capitals

/* URL
https://www.codewars.com/kata/539ee3b6757843632d00026b
*/ 

/* INSTRUCTIONS

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

// SOLUTION

var capitals = function (word) {
    // create empty array for result.
    let result = [];
    // loop word 
    for (let i = 0; i < word.length; i++) {
        // check if letter is uppercase, if yes push that index to the empty array.
        if (word[i].toUpperCase() == word[i]) result.push(i)
    }
    // return result with index of all cap letters. 
    return result;
};

// TEST CASES

console.log(capitals('CodEWaRs')); // [0,3,4,6]