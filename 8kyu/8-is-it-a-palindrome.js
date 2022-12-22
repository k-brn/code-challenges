// Is it a palindrome?

/* URL
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
*/ 

/* INSTRUCTIONS

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

// SOLUTION

function isPalindrome(x) {
    if (x.toLowerCase() == x.toLowerCase().split('').reverse().join('')){
      return true;
    }else{
      return false;
    }
}

// TEST CASES

console.log(isPalindrome("a")); // true
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("Abba")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Bob")); // true
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("AbBa")); // true
console.log(isPalindrome("")); // true