// Ternary operator
// const prompt = require("prompt-sync")({ sigint: true });

// let points = Number(prompt("What's your current score?"));
// let points = 60;
// function playerStatus(points) {
//   return points >= 500 ? "Chief" : "Novice";
// }

// console.log(playerStatus(points));

// // Null coalescing operator
// let fullName;

// let Name = fullName !== null && fullName !== undefined ? fullName : "John Doe";
// let userName = fullName ?? "John Doe";

// console.log(userName);
// console.log(Name);

// Do while loops
let score = 8;

do {
  console.log(`Checking if Score is above 0...
    Score = ${score}. `);
  score--;
} while (score > 0);
