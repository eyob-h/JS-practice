'use strict';
/*
// Functions
function describeCountry(country, population, capitalCity) {
    const statement = `${country} has ${population} people and the capital city is ${capitalCity}`;
    return statement;
}

const ethiopia = describeCountry(`Ethiopia`, `130 Million`, `Addis Ababa`);
const egypt = describeCountry(`Egypt`, `117 Million`, `Cairo`);
const kenya = describeCountry(`Kenya`, `57 Million`, `Nairobi`);

console.log(ethiopia);
console.log(egypt);
console.log(kenya);
*/


/*
// Function declaration vs expression

// Function Declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let ethiopiaPercentage = percentageOfWorld1(130);
let egyptPercentage = percentageOfWorld1(117);
let kenyaPercentage = percentageOfWorld1(57);

console.log("Function declaration");
console.log(ethiopiaPercentage);
console.log(egyptPercentage);
console.log(kenyaPercentage);

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}


let ethiopiaPercentage2 = percentageOfWorld2(130);
let egyptPercentage2 = percentageOfWorld2(117);
let kenyaPercentage2 = percentageOfWorld2(57);

console.log("\nFunction expression");
console.log(ethiopiaPercentage2);
console.log(egyptPercentage2);
console.log(kenyaPercentage2)
*/



/*
// Arrow Functions
const percentageOfWorld3 = population => ((population / 7900) * 100);

let ethiopiaPercentage3 = percentageOfWorld3(130);
let egyptPercentage3 = percentageOfWorld3(117);
let kenyaPercentage3 = percentageOfWorld3(57);

console.log("\n Arrow Function");
console.log(ethiopiaPercentage3);
console.log(egyptPercentage3);
console.log(kenyaPercentage3)
*/


/*
// Arrays
let populations = [130, 110, 89, 50];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/


// Dot and bracket notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'A.',
//     age: 987 - 455,
//     job: 'Astronaut',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}😁.`)


/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Abe',
    birthYear: 1991,
    job: 'Teacher',
    hasDriverLicense: false,
    calculateAge: function () {
        return 2025 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calculateAge()} year old ${this.job}, and has ${this.hasDriverLicense ? 'a' : 'no'} driver's licence.`
    }
}

// console.log(`${jonas.firstName} is a ${jonas.calculateAge()} year old ${jonas.job}, and has ${jonas.hasDriverLicense ? 'a' : 'no'} driver's licence.  `);
let j = jonas;
// console.log(j);
console.log(j.getSummary());

*/


/*
// The for loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const typeOfElementsArray = [];

for (let i = 0; i < jonasArray.length; i++) {
    typeOfElementsArray[i] = typeof jonasArray[i];
}

console.log(typeOfElementsArray);
*/

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// let populations = [130, 110, 89, 50];
// let percentages2 = [];
// console.log(`Population Percentages: ${percentages2}`);

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(`Population Percentages: ${percentages2}`);

// Looping backwards and loops in loops
// let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     // console.log(listOfNeighbours[i])
//     // console.log(typeof listOfNeighbours[i])
//     // console.log(listOfNeighbours[i].length)
//     // for (let j = 0; j < listOfNeighbours[i].length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// The while loop
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let populations = [130, 110, 89, 50];
let percentages2 = [];

let i = 0;
while (i < populations.length) {
    percentages2.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(`Population Percentages: ${percentages2}`);