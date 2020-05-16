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
        name: 'usage',
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
        type: 'checkbox',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ['MIT', 'GNU', 'Existing Project']
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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
