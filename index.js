const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
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
        choices: ["Academic Free License v3.0", "Creative Commons license family", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Microsoft Public License", "MIT", "Open Software License 3.0", "The Unlicense", "None"]
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
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating ReadMe.md file - Please be patient");
        writeToFile("./GeneratedReadMe/ReadMe.md", generateMarkdown({...responses}));
    })
}
init();
