'use strict';

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


