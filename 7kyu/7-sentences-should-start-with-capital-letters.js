// Sentences should start with capital letters.

/* URL
https://www.codewars.com/kata/5bf774a81505a7413400006a
*/ 

/* INSTRUCTIONS

In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word

*/

// SOLUTION

function fix(paragraph){
    // split string into individual sentences.
    let s = paragraph.split('. ');
    //
    for (let i = 0; i < s.length; i++){
      // capitalize first letter of the first word in each sentence.
      s[i] = s[i].charAt(0).toUpperCase()
      // add the whole sentence to letter and take away first char.
      + s[i].slice(1);
    }
    //join the string back with 'period' and space.
    return s.join('. ')
}

// TEST CASES

console.log(fix("")); // ""
console.log(fix("hi.")); // "Hi."
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die.")); // "Hello. My name is inigo montoya. You killed my father. Prepare to die."