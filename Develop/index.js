// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    //function to obtain answers from user.
//  questions
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'projectTitle',
            message: "What is the name of your project?: ",
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project. (Required): ',
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the installation instructions?: \n',
        },
        {
            type: 'input',
            name: 'usageInstructions',
            message: 'What are the instructions to use your application?: ',
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'Which license applies?: ',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'contributionInstructions',
            message: 'How can others contribute to your project?:\n ',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'How can users test your application?:\n ',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?: ',
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?:',
        
        }

    ]); 
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README.md file is created');
    });
}

// TODO: Create a function to initialize app
const init = async () => {
    let userInput = await promptUser();
    let markDownText = generateMarkdown(userInput);
    // console.log(userInput);
    writeToFile('./temp/README.md', markDownText)
    

};


// Function call to initialize app
init();

// user input => direct that to specific places on the readme => write that as a markdown file.