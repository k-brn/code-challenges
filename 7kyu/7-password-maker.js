// Password maker

/* URL
https://www.codewars.com/kata/5637b03c6be7e01d99000046
*/ 

/* INSTRUCTIONS

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.

*/

// SOLUTION

function makePassword(phrase) {
    // split str into words and return first char or each word.
    return phrase.split(' ').map(a => a[0])
    // join to create one word from the 1st char of each word.
    .join('')
    // replace all i and I with '1'
    .replace(/i/gi, '1')
    // replace all o and O with '0'
    .replace(/o/gi, '0')
    // replace all s and S with '5'
    .replace(/s/gi, '5');
}
  
// TEST CASES
  
console.log(makePassword("Give me liberty or give me death")); // "Gml0gmd"
console.log(makePassword("Keep Calm and Carry On")); // "KCaC0"
console.log(makePassword("Life shrinks or expands in proportion to one’scourage")); // "L50e1pt0c"