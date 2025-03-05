// Linking a JS file
// alert("mango");

// 10 * 2 + 99 - 6;
// console.log(10 * 2 + 99 - 9);

// Values and Variables 
// Assignments
let country = "Ethiopia";
let continent = "Africa";
let population = 134353289;
// let isIsland = false;
// let language = "Ge'ez";
const isIsland = false;
const language = "Ge'ez";
// language = 'Amharic'; // Assignment to constant variable.

console.log("Country = ", country);
console.log("Continent = ", continent);
console.log("Population = ", population);
console.log("Island = ", isIsland);
console.log("Language = ", language);

let halfPopulation = population / 2;
console.log("Half Population = ", halfPopulation);
console.log("Population Increment = ", population++);
console.log("Population Increment = ", ++population);
console.log("Does " + country + " have more people than Norway? " + (population > 6000000));

const description = `${country} is located in ${continent}. It has around ${population} people living in it. The official language of ${country} is ${language}.
Go ${country}!!`;

console.log(description);

// Data types
/*
let mango;
console.log(typeof mango)
console.log(mango)

let theType = typeof mango;
alert(theType);
let num = 3;
console.log(typeof num);

let dynamic = true;
console.log(typeof dynamic);

dynamic = "JavaScript"
console.log(typeof dynamic);
*/

// Let, const, and var
// const birthYear = 2000;
// console.log(birthYear);


// let age = 23;
// age = 24;
// console.log(age);

// Missing initializer in const declaration
/*const height;
height = 1.89;
*/

// Basic operators
// Operator precedence


// Template literal
let firstName = "Bob";
let introduction = `Hi I'm ${firstName}.`;
let lastName = `John`;
let introducelastName = `My last name is ${lastName}.`;
console.log(introduction, introducelastName);

let multiLine = `This is a multi-line 
string which was written
using template literals!🐱‍🏍`;
console.log(multiLine);

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 117x  1143      