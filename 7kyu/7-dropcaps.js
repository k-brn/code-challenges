// Dropcaps

/* URL
https://www.codewars.com/kata/559e5b717dd758a3eb00005a
*/

/* INSTRUCTIONS

DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

should work also on Leading and Trailing Spaces and caps.

*/

// SOLUTION

function dropCap(n) {
  let ans = [];
  // split string into individual words
  let str = n.split(" ");
  for (let i = 0; i < str.length; i++) {
    // if > 2 , capitalize first letter and concat the reast of word to lower case
    if (str[i].length > 2) {
      ans.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
    } else {
      // if word is under 2 char, just push to answer
      ans.push(str[i]);
    }
  }
  // joins back to one string
  return ans.join(" ");
}

// TEST CASES

console.log(dropCap("Apple Banana")); // "Apple Banana"
console.log(dropCap("Apple")); // "Apple"
console.log(dropCap("")); // ""
console.log(dropCap("of")); // "of"
console.log(dropCap("more  than    one space between words")); // "More  Than    One Space Between Words"
console.log(dropCap("  leading spaces")); // "  Leading Spaces")
console.log(dropCap("trailing spaces   ")); // "Trailing Spaces   "
console.log(dropCap("ALL CAPS CRAZINESS")); // "All Caps Craziness"
console.log(dropCap("rAnDoM CaPs CrAzInEsS")); // "Random Caps Craziness"
