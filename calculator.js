const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const numberOne = +prompt("Please enter a number");
const numberTwo = +prompt("Please enter another number");
const operation = prompt("Please enter the operation (+, -, *, /)");

console.log(numberOne);
console.log(numberTwo);
console.log(operation);

if(!isNaN(numberOne) && !isNaN(numberTwo)){
if(operation === "+"){
    console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
} else if(operation === "-"){
    console.log(`${numberOne} + ${numberTwo} = ${numberOne - numberTwo}`);
} else if(operation === "*"){
    console.log(`${numberOne} + ${numberTwo} = ${numberOne * numberTwo}`);
} else if(operation === "/"){
    console.log(`${numberOne} + ${numberTwo} = ${numberOne / numberTwo}`);
} else {
    console.log("PLease enter a correct operation")
}
} else {
    console.log("Invalid numbers")
}