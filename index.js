// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require('axios');

// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input",
       Message: "What is the title of your project?",
       name: "title", 
    },
    {
        type: "input",
        Message: "Please enter your project's description.",
        name: "description", 
     },
     {
        type: "input",
        Message: "What are the necessary installations for your project?",
        name: "installations", 
     },
     {
        type: "input",
        Message: "What are the instructions to use this project?",
        name: "usage", 
     },
     {
        type: "input", //need to change to a list//
        Message: "What are the necessary licenses for this project?",
        name: "licenses", 
     },
     {
        type: "input",
        Message: "Who are the contributors to this project",
        name: "contributors", 
     },
     {
        type: "input",
        Message: "Please enter any tests that have been written for your application",
        name: "tests", 
     },
     {
        type: "input",
        Message: "Please enter any FAQ that have come up pertaining to your application",
        name: "Questions", 
     },
     {
        type: "input",
        Message: "Please enter your email address",
        name: "email", 
     },
     {
        type: "input",
        Message: "Please enter your Github username",
        name: "username", 
     },
];


// TODO: Create a function to write README file
//function writeToFile("README.md", data) {

//}//

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(data => {
    fs.writeToFile("NewREADME.md",generateMarkdown(data));
    console.log(data);
})
.catch(error => {
    if(error.isError){
    console.log("error")
    } else {
    console.log("your new READMe file has been generated!")
    }
})    
}

// Function call to initialize app
init();
