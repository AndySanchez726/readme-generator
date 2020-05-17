const fs = require('fs');
const generatePage = require('./utils/generatemarkdown.js')
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the README?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'What are the usage instructions?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the credits used for the project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the instructions to test the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'File created!'
            });
        });
    });
};

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}


// function call to initialize program
init()
    // .then(answers => console.log(answers))
    .then(initData => {
        return generatePage(initData);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })
;
