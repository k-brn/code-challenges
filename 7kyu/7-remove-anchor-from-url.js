// Remove anchor from URL

/* URL
https://www.codewars.com/kata/51f2b4448cadf20ed0000386
*/ 

/* INSTRUCTIONS

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

// SOLUTION

function removeUrlAnchor(url){
    //return String(url.split('#',1));
    // split string at '#' and return first index 0.
    return url.split('#')[0];
}

// TEST CASES

console.log(removeUrlAnchor('www.codewars.com#about')); // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')); // 'www.codewars.com/katas/'