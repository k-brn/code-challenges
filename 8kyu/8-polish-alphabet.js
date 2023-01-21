// Polish alphabet

/* URL
https://www.codewars.com/kata/57ab2d6072292dbf7c000039
*/ 

/* INSTRUCTIONS

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

// SOLUTION

function correctPolishLetters (string) {
    const chars = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}
    return string.replace(/[ąćęłńóśźż]/g, a => chars[a]);
}

// TEST CASES

console.log(correctPolishLetters("Jędrzej Błądziński")); // "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")); // "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")); // "Maria Sklodowska-Curie"