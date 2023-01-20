// Ch4113ng3

/* URL
https://www.codewars.com/kata/59e9f404fc3c49ab24000112
*/ 

/* INSTRUCTIONS

Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

*/

// SOLUTION

function nerdify(txt){
    return txt
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/l/g, 1);
}

// TEST CASES

console.log(nerdify("Fund4m3nt41s")); // "Fund4m3nt41s"
console.log(nerdify("Seven")); // "S3v3n"
console.log(nerdify("Los Angeles")); // "Los 4ng313s"
console.log(nerdify("Seoijselawuue")); // "S3oijs314wuu3"