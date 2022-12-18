// Sort and Star

/* URL
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
*/ 

/* INSTRUCTIONS

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

// SOLUTION

function twoSort(s) {
    //return s.sort().slice(0,1).join().split('').join('***');

    // sort arr in alphabetical order returning the first word.
    return s.sort()[0]
    // split each letter in the word.
    .split('')
    // join the word with '***' between each letter.
    .join('***');
}

// TEST CASES

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); // 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); // 'a***r***e'