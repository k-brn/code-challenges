// if..else and ternary operator

/* URL
https://www.codewars.com/kata/57202aefe8d6c514300001fd
*/

/* INSTRUCTIONS

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90

*/

// SOLUTION

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

// TEST CASES

console.log(saleHotdogs(1)); //  100
console.log(saleHotdogs(4)); //  400
console.log(saleHotdogs(5)); //  475
console.log(saleHotdogs(9)); //  855
console.log(saleHotdogs(10)); //  900
console.log(saleHotdogs(100)); // 9000
