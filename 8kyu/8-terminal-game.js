// Terminal Game

/* URL
https://www.codewars.com/kata/55e8aba23d399a59500000ce
*/

/* INSTRUCTIONS

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	    user argument or 'Hero'
position	'00'
health	    100
damage	    5
experience	0

*/

// SOLUTION

class Hero {
  constructor(name) {
    this.name = name || "Hero";
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

// TEST CASES

console.log(new Hero("Greg")); // Hero Greg should have a name attribute with value Greg
console.log(new Hero()); // Hero should have a name attribute with value Hero
