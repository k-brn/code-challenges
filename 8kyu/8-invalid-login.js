// Invalid Login

/* URL
https://www.codewars.com/kata/55e4c52ad58df7509c00007e
*/

/* INSTRUCTIONS

Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

*/

// SOLUTION

function validate(username, password) {
  var database = new Database();
  return database.login(username, encodeURI(password));
}

// TEST CASES

console.log(validate("Timmy", "password")); // 'Successfully Logged in!'
console.log(validate("Timmy", "h4x0r")); // 'Wrong username or password!'
console.log(validate("Alice", "alice")); // 'Successfully Logged in!'
console.log(validate("Timmy", 'password"||""=="')); // 'Wrong username or password!'
console.log(validate("Admin", 'gs5bw"||1==1//')); // 'Wrong username or password!'
