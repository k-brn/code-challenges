// COFFEE!

/* URL
https://www.codewars.com/kata/595d54bddddd7cf91800008c
*/ 

/* INSTRUCTIONS

Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

COFFEE

Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

Output: string with all instances of coffee in all-caps:

Examples:

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

*/

// SOLUTION

function coffee(str) {
    // takes every instance of word ' coffee ' regardless of case and changes it to ' COFFEE '. 
    return str.replace(/coffee/gi, 'COFFEE');
}

// TEST CASES

console.log(coffee("Is that coffee?  Can I have it?  I'll pay you.")); // "Is that COFFEE?  Can I have it?  I'll pay you."
console.log(coffee("I'm having trouble staying focussed.  Let's get some coffee.")); // "I'm having trouble staying focussed.  Let's get some COFFEE."
console.log(coffee("COFFEE COFFEE coFFEE!")); // "COFFEE COFFEE COFFEE!"
console.log(coffee("Is that coffee?  Can I have it?  I'll pay you.")); //  "Is that COFFEE?  Can I have it?  I'll pay you."
console.log(coffee("No cream in my coffee, thanks.")); // "No cream in my COFFEE, thanks."