// // Arrow functions

// const arrowFunction1 = () => {

//  }

// //  export arrow function
// export default function normalFunction(){
        
// }

// export const arrowFunction2 = () => {

// }

// // Anonymous functions
// <button  
//     onClick={()=>{
//     console.log("hi there");
// }}>

// </button>

// // Ternary Operators
// let age = 21;
// // let name = age>22 && "eyob";
// // let name = age>22 || "eyob";
// let name =  age>22 ? "eyob" : "Bob"

// console.log(`Hi `+name)

// 3 Objects -- dictionary, hashmaps
const person = {
    name : "Bob",
    age: 20,
    salary: 60000
}
// spread operator
const person2 = {...person, name:"Nancy"}

// console.log(person.age >18 ? "Grown": "Baby")
// console.log("\n", person,"\n", person2)

// 
// // const {nameFromObj} = person //the var name has to match
// const {name} = person
// console.log(name)

// shorthand to set object values
// const sim = "Jack"
// const person3 = {
//     sim,
//     age:19,
//     salary:0
// } 
// console.log(person3.sim)

// const planetsWithTwoMoons = ["Mars", "Jupyter"] 
// const planetsWithMoons = [ "Earth",...planetsWithTwoMoons, "Add others by your own"] 
// console.log(planetsWithMoons)

// // Array Functions

// // map
// let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupyter","Saturn","Uranus","Neptune"]

// planets.map((pl) =>{
//         console.log(pl + " is beautiful.")
// })

// console.log("======================" )
// planets.map((p) => {
//     if(p==="Earth"){
//         console.log("Our home "+ p)
//     }else{
//         console.log(p)
//     }
//     // console.log(p) ? p ==="Earth" : console.log(p+ " Our home")
//     // console.log(p +" is our home." ? p ==="Earth" : p)
// })

// planets.map((planet)=>{
//     return "Planet " + planet
// })
// console.log(planets)


// // filter
// planets.filter((planet)=>{
//     return planet =  planet += "our home!" ? planet =="Earth" : planet
// })

// console.log(planets)

// DOM

// //Import Export

// //JS Import export
// const axios = require(axios)
// module.exports = {Object1}

// // React import export
// // let object1 = {a:1}
// import axios from "axios"
// export {object1}
// export default {object1}
// // export const {object1}

//ternary operators
let color = "Blue"
let isCorrect = false

color = isCorrect ? "Green" : "Red"  
color = isCorrect && "Green"  

// Optional Chaining

const fetchData = async () =>{
    const data = await fetch ("imaginaryAPI.com");
    const name = data.person.name;  //might try to fetch the name before checking if name exists. So we should rather use: data.person?.name
    const name2 = data.person?.name;
}


//Template Literals   // `${}`

