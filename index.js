const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of your project:",
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter installation instructions",
    }, 
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project:",
    },
    {
        type: "input",
        name: "contribution",
        message: "State contribution guidelines:"
    },
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of required tests if applicable:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license for this project:",
        choices: ["MIT", "Apache", "GPL", "Apache 2", "BSD", "None"]
    },
    {
        type: "input",
        name: "github",
        message:"What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address for questions?"
    },
]

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
        console.log("Information gathered, please be patient during generation...")
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        writeToFile("./GeneratedReadMe/ReadMe.md", generateMarkdown(userInput));
    });
};

init();
