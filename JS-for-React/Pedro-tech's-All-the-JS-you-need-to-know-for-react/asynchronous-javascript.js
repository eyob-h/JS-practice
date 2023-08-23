//Fetching data from servers and APIs isn't instant like console.log

//To solve the latency issue, we can use:
//1. Promises(first proposed idea)
//eg
// const event = new Promise((resolve, reject)=> {
//     let name = "Eyob"
//     if(name == "Eyoba"){
//         resolve(name);
//     }else{
//         reject("You didn't call with endearment");
//     }
// })

//event.then().catch()
//if what will be called if resolved & if rejected respectively

// event
//     .then((name)=>{
//         console.log(`You used the endearment term ${name} :)`);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Promise Has Finished.")
//     })



// Promises with real API

const axios = require("axios")
// const data = axios.get("https://cat-fact.herokuapp.com/facts")

// console.log("Cats")
// data
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log("ERROR OCCURED HERE:")
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Done!")
//     })

// Newer and arguably shorter way of doing the same thing is async await

// const fetchData = async () => {
//     try{

//         const data = await axios.get("https://cat-fact.herokuapp.com/facts");
//         console.log(data);
//     }catch{
//         console.log(err);
//     }finally{
//         console.log("DONE FETCHING!");
//     }
// }


const fetchData2 = async () => {
    try{
        const data = await axios.get("https://cat-fact.herokuapp.com/facts")
        console.log(data)
    }catch{
        console.log(err)
    }finally{
        console.log("Done Fetching")
    }
}

fetchData2()