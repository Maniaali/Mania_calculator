#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: " select one of these operator to perfum action",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "devision", "multiplication"],
  },
]);

if(Answer.operator === "Addition")  {
  console.log(Answer.firstnumber + Answer.secondnumber)
} 
else if (Answer.operator === "subtraction") {
  console.log(Answer.firstnumber - Answer.secondnumber)
} 
else if (Answer.operator === "devision") {
  console.log(Answer.firstnumber / Answer.secondnumber)}

 else if(Answer.operator==="multiplication") {
   console.log(Answer.firstnumber * Answer.secondnumber)
  }

 else {
  console.log("please select a valid operator")
}
