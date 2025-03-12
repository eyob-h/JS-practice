// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

function calcTip(bill) {
    tip = (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
    return tip;
}
// And now let's use arrays! So, create an array called bills containing the test data below. 

console.log(calcTip(555))
const bills = [125, 555, 44];

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)

// BONUS: Create an array totals containing the total values, so the bill + tip.