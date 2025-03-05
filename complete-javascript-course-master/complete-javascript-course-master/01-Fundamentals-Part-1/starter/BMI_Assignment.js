// Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("John's BMI = " + BMIJohn);
console.log("Mark's BMI = " + BMIMark);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Mark's BMI is higher? " + markHigherBMI);

// BMI String literals challenge
// 1
let BMIComparison = ``;
if (BMIMark > BMIJohn) {
    BMIComparison = "Mark's BMI is higher than John's!";
} else {
    BMIComparison = "John's BMI is higher than Mark's!";

}
console.log(BMIComparison);

// 2
if (BMIMark > BMIJohn) {
    BMIComparison = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
} else {
    BMIComparison = `John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`;

}
console.log(BMIComparison)