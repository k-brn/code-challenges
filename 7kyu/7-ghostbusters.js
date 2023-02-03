// Ghostbusters

/* URL
https://www.codewars.com/kata/5668e3800636a6cd6a000018
*/ 

/* INSTRUCTIONS

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

*/

// SOLUTION

function ghostBusters(building) {
    return building == building.split(' ').join('') ? "You just wanted my autograph didn't you?" : building.split(' ').join('');
}

// TEST CASES

console.log(ghostBusters("Factor y")); // "Factory"
console.log(ghostBusters("O  f fi ce")); // "Office"
console.log(ghostBusters("BusStation")); // "You just wanted my autograph didn't you?"