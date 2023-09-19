// UEFA EURO 2016

/* URL
https://www.codewars.com/kata/57613fb1033d766171000d60
*/

/* INSTRUCTIONS

Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

*/

// SOLUTION

function uefaEuro2016(teams, scores) {
  if (scores[0] > scores[1]) {
    // check if team 1 score is greater than team 2
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    // check if team 2 score is greater than team 1
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else {
    // check if team scores are equal (draw)
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}

// TEST CASES

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); // At match Germany - Ukraine, Germany won!
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); // At match Belgium - Italy, Italy won!
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); // At match Portugal - Iceland, teams played draw.
