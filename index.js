// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "What is the description of your project?",
  "What are the installation instructions for your project?",
  "Enter in any installation commands for your project.",
  "What is the usage information for your project?",
  "Enter in any usage commands for your project",
  "What are the contribution guidelines for your project?",
  "What are the test instructions for your project?",
  "Enter in any test commands for your project",
  "What license would you like to use for your project?",
  "What is your GitHub username?",
  "What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeMarkdown = generateMarkdown(data);
  fs.writeFile(fileName, readmeMarkdown, (err) =>
    err ? console.error(err) : console.log("Readme!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
      required: true,
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "installation",
    },
    {
      type: "input",
      message: questions[3],
      name: "installationCode",
    },
    {
      type: "input",
      message: questions[4],
      name: "usage",
    },
    {
      type: "input",
      message: questions[5],
      name: "usageCode",
    },
    {
      type: "input",
      message: questions[6],
      name: "contributing",
    },
    {
      type: "input",
      message: questions[7],
      name: "tests",
    },
    {
      type: "input",
      message: questions[8],
      name: "testCode",
    },
    {
      type: "list",
      message: questions[9],
      name: "license",
      choices: ["Apache 2.0", "GPL 3.0", "BSD 3", "MIT", "None"],
    },
    {
      type: "input",
      message: questions[10],
      name: "github",
    },
    {
      type: "input",
      message: questions[11],
      name: "email",
    },
  ])
  .then((data) => {
    writeToFile(`output/${data.title}_README.md`, data);
  });
}

// Function call to initialize app
init();
