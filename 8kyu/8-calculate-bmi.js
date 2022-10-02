// Calculate BMI 

/* URL
https://www.codewars.com/kata/57a429e253ba3381850000fb
*/ 

/* INSTRUCTIONS

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// SOLUTION

function bmi(weight, height) {
    // weight in kilograms divided by height in meters squared
    let bodyMassIndex = (weight / (height * height))

    if (bodyMassIndex <= 18.5){
        console.log('Underweight')
    }else if (bodyMassIndex <= 25.0){
        console.log('Normal')
    }else if (bodyMassIndex <= 30.0){
        console.log('Overweight')
    }else{
        console.log('Obese')
    }
  }


// TEST CASES
bmi(20, 1.80) // Underweight
bmi(80, 1.80) // Normal
bmi(90, 1.80) // Overweight
bmi(100, 1.80) // Obese 
