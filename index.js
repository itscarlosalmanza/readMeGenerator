const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "Provide your gitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your application.",
  },
  {
    type: "input",
    name: "title",
    message: "What is your applications name?",
  },
  {
    type: "list",
    name: "license",
    message: "What licenses should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be ran to install dependencies?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be ran for testing?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What should the user know about using this repository?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What should the user know about contributing to this repository?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating ...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();
