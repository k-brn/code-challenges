// Fizz Buzz

/* URL
https://www.codewars.com/kata/5300901726d12b80e8000498
*/ 

/* INSTRUCTIONS

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead

If the value is a multiple of 5: use the value "Buzz" instead

If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

// SOLUTION

function fizzbuzz(n) {
    // empty arr to store result
      let arr = [];
    // for loop that counts from 1 to n
      for (let i = 1; i <= n; i++){
    // check to see if value is multiple of 3 & 5
        if (i % 3 == 0 && i % 5 == 0) {
    // push 'FizzBuzz' to arr  
          arr.push('FizzBuzz');
    // check to see if value is multiple of 3
        }else if (i % 3 == 0){
    // push 'Fizz' to arr 
          arr.push('Fizz');
    // check to see if value is multiple of 5
        }else if (i % 5 == 0){
    // push 'Buzz' to arr 
          arr.push('Buzz');
        }else{
    // push any number that does fit the conditions
          arr.push(i);
        }
      }
    // return arr with result 
      return arr;
}

// TEST CASES

console.log(fizzbuzz(10)); // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']