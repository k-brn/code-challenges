// Youtube URL

/* URL
https://www.codewars.com/kata/58a0697ef636cac09c000014
*/

/* INSTRUCTIONS

There are many kinds of links to the video:

https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

https://www.youtube.com/watch?v=UN8oLGBNXpE

http://www.youtube.com/watch?v=UN8oLGBNXpE

https://youtu.be/UN8oLGBNXpE

If we insert the first link in the iframe, it works, but another do not work.

Task:
Please write a function that converts the string in the correct format for the iframe.

*/

// SOLUTION

function makeYoutubeLink(str) {
  // slice the last 11 chars from string and place them at the end of this string
  return `https://www.youtube.com/embed/${str.slice(-11)}`;
}

// TEST CASES

console.log(makeYoutubeLink("https://www.youtube.com/embed/L3JxAuUyjzY")); // "https://www.youtube.com/embed/L3JxAuUyjzY"
console.log(makeYoutubeLink("https://www.youtube.com/watch?v=L3JxAuUyjzY")); // "https://www.youtube.com/embed/L3JxAuUyjzY"
console.log(makeYoutubeLink("https://youtu.be/L3JxAuUyjzY")); // "https://www.youtube.com/embed/L3JxAuUyjzY"
