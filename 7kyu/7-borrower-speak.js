// Borrower Speak

/* URL
https://www.codewars.com/kata/57d2ba8095497e484e00002e
*/ 

/* INSTRUCTIONS

The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

The young borrowers have begged their parents to stop using caps and punctuation.

Change the input text s to new borrower speak. Help save the next generation!

*/

// SOLUTION

function borrow(s){
    // returns string bacl in all lowercase.
    return s.toLowerCase()
    // replace all chars that are not a-z.
      .replace(/[^a-z]/g,'');
}

// TEST CASES

console.log(borrow('WhAt! FiCK! DaMn CAke?')); // 'whatfickdamncake'
console.log(borrow('THE big PeOpLE Here!!')); // 'thebigpeoplehere'
console.log(borrow('i AM a TINY BoY!!')); // 'iamatinyboy'