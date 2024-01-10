// Define a card suit

/* URL
https://www.codewars.com/kata/5a360620f28b82a711000047
*/

/* INSTRUCTIONS

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

*/

// SOLUTION

function defineSuit(card) {
  const suitSymbol = card.slice(-1);

  switch (suitSymbol) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
      defult: return "Unvalid";
  }
}

// TEST CASES

console.log(defineSuit("Q♠")); // 'spades'
console.log(defineSuit("9♦")); // 'diamonds'
console.log(defineSuit("J♥")); // 'hearts'
