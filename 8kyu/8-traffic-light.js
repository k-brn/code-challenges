// Traffic light

/* URL
https://www.codewars.com/kata/58649884a1659ed6cb000072
*/ 

/* INSTRUCTIONS

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

*/

// SOLUTION

function updateLight(current) {
// light color flow, green -> yellow -> red -> green.
  if (current == 'green'){
    return 'yellow';
  }else if (current == 'yellow'){
    return 'red';
  }else {
    return 'green';
  }
}

// TEST CASES

console.log(updateLight("green")); // "yellow"
console.log(updateLight("yellow")); // "red"
console.log(updateLight("red")); // "green"