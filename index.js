const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// an array of questions for the user about repo
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your repo?"
    },{
        type: "input",
        name: "email",
        message: "What is your e-mail address?"
    },{
        type: "input",
        name: "description",
        message: "Please give a brief description of your repo."
    },{
        type: "list",
        name: "license",
        message: "What license should your repo have?",
        choices: ["MIT", "APACHE-2.0", "GPL-3.0", "NONE"]
    },{
        type: "input",
        name: "contributions",
        message: "Who can contribute to your repo?"
    },{
        type: "input",
        name: "test",
        message: "Are there any commands to run tests on your repo?",
        default: "npm test"
    },{
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies for your repo?",
        default: "npm i"
    },{
        type: "input",
        name: "usage",
        message: "What does the user need to know about using your repo?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        writeToFile("ReadMe.md", generateMarkdown({...inquirerAnswers}))
    })
};

// function call to initialize program
init();