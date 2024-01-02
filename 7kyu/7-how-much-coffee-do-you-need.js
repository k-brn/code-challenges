// How much coffee do you need?

/* URL
https://www.codewars.com/kata/57de78848a8b8df8f10005b1
*/

/* INSTRUCTIONS

Everybody know that you passed to much time awake during night time...

Your task here is to define how much coffee you need to stay awake after your night. You will have to complete a function that take an array of events in arguments, according to this list you will return the number of coffee you need to stay awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.

The list of events can contain the following:

You come here, to solve some kata ('cw').

You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').

You just watch a movie ('movie').

Other events can be present and it will be represent by arbitrary string, just ignore this one.

Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

*/

// SOLUTION

function howMuchCoffee(events) {
  // Array containing specifed events
  const specifiedEvents = ["cw", "dog", "cat", "movie"];

  // Total coffee count
  let totalCoffee = 0;

  // Loop through each event in the array
  for (let i = 0; i < events.length; i++) {
    // Convert current event to lowercase for comparison
    const event = events[i].toLowerCase();

    // Check if the event is one of the specified events
    if (specifiedEvents.includes(event)) {
      // Add 1 coffee for lowercase, 2 for uppercase
      totalCoffee += event === events[i] ? 1 : 2;
    }
  }

  // Check if total count exceeds 3
  return totalCoffee > 3 ? "You need extra sleep" : totalCoffee;
}

// TEST CASES

console.log(howMuchCoffee([])); // 0
console.log(howMuchCoffee(["cw"])); // 1
console.log(howMuchCoffee(["CW"])); // 2
console.log(howMuchCoffee(["cw", "CAT"])); // 3
console.log(howMuchCoffee(["cw", "CAT", "DOG"])); // 'You need extra sleep'
console.log(howMuchCoffee(["cw", "CAT", "cw=others"])); // 3
