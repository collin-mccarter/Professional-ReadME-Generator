// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter a name for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of your project:",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter installation instructions",
        validate: instructionsInput => {
            if(instructionsInput) {
                return true;
            } else {
                console.log("Please enter a instructions for your project!");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "usage",
        message: "State the usage or how this project is intended to be used:",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Please enter a usage details for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "State contribution guidelines:",
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("Please enter a contribution information for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of required tests if applicable:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license for this project:",
        choices: ["MIT", "Apache", "GPL", "Apache 2", "BSD", "None"],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log("Please select one of the options for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message:"What is your GitHub username?",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter a GitHub username for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address for questions?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter a email for your project!");
                return false;
            }
        }
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
        console.log("Information gathered, please be patient during generation...")
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        writeToFile("./GeneratedReadMe/ReadMe.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
