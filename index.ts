#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "seondNumber" },
  {
    message: " Select one of the operrator to perform function",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.seondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.seondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.seondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.seondNumber);
} else {
  console.log("please select valid operator");
}
