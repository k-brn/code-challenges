// Help Bob count letters and digits.

/* URL
https://www.codewars.com/kata/5738f5ea9545204cec000155
*/ 

/* INSTRUCTIONS

Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

*/

// SOLUTION

function countLettersAndDigits(input) {
    //finds number of chars in str
    return input.length 
    // minus number of chars in str with a-z(upper and lowercase) and 0-9 removed.
    - input.replace(/[a-zA-Z0-9]/g, '').length;
}

// TEST CASES

console.log(1,countLettersAndDigits("hel2!lo")); // 6
console.log(2,countLettersAndDigits("n!!_ice!!123")); // 7
console.log(3,countLettersAndDigits("1")); // 1
console.log(4,countLettersAndDigits("?")); // 0
console.log(5,countLettersAndDigits("12345f%%%t5t&/6")); // 10
console.log(6,countLettersAndDigits("aBcDeFg090")); // 10
console.log(7,countLettersAndDigits("u_n_d_e_r__S_C_O_R_E")); // 10