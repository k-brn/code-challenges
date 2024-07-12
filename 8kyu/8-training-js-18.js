// Training JS #18

/* URL
https://www.codewars.com/kata/57280481e8118511f7000ffa
*/

/* INSTRUCTIONS

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.



*/

// SOLUTION

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((word) => word.split("").join(separator))
    .join(" ");
}

// TEST CASES

console.log(splitAndMerge("My name is John", " ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-")); // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", ".")); // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ",")); // "H,e,l,l,o W,o,r,l,d,!"
