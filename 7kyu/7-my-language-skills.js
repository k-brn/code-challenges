// My Language Skills

/* URL
https://www.codewars.com/kata/5b16490986b6d336c900007d
*/

/* INSTRUCTIONS

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

*/

// SOLUTION

function myLanguages(results) {
  return (
    Object.keys(results)
      // Filtering out any key that doesn’t have a value >= 60
      .filter((key) => results[key] >= 60)
      // Sorting the keys based on value in descending order
      .sort((a, b) => results[b] - results[a])
  );
}

// TEST CASES

Test.assertDeepEquals(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); // ["Ruby", "Python"]
Test.assertDeepEquals(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); // ["Dutch", "Greek", "Hindi"]
Test.assertDeepEquals(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); // []
