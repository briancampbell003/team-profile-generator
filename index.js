const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

var myTeam = [];

// Initial inquirer prompt sequence to get manager info then return to Main Menu
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your team manager's name",
            name: 'mgrName',
        },
        {
            type: 'input',
            message: 'Manager id?',
            name: 'mgrId',
        },
        {
            type: 'input',
            message: 'Manager email?',
            name: 'mgrEmail',
        },
        {
            type: 'input',
            message: 'Manager office number?',
            name: 'mgrOffice',
        }
    ])
    .then(response => {
        let { mgrName, mgrId, mgrEmail, mgrOffice } = response;
        let manager = new Manager(mgrName, mgrId, mgrEmail, mgrOffice);
        myTeam.push(manager);
        mainMenu();
    })

// Main Menu to choose to add members or finish building team
function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another team member or finish building your team?',
                name: 'mainMenu',
                choices: ['Add engineer', 'Add intern', 'Finish team']
            }
        ])
        .then(response => {
            switch (response.mainMenu) {
                case 'Add engineer':
                    addEngineer();
                    break;

                case 'Add intern':
                    addIntern();
                    break;

                case 'Finish team':
                    finishTeam();
                    break;

                default:
                    break;
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name",
                name: 'engName',
            },
            {
                type: 'input',
                message: "What is the engineer's employee id?",
                name: 'engId',
            },
            {
                type: 'input',
                message: "What is the engineer's email address?",
                name: 'engEmail',
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub username?",
                name: 'engGit',
            }
        ])
    .then(response => {
        let { engName, engId, engEmail, engGit } = response;
        let engineer = new Engineer(engName, engId, engEmail, engGit);
        myTeam.push(engineer);
        mainMenu();
    })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name",
                name: 'intName',
            },
            {
                type: 'input',
                message: "What is the intern's employee id?",
                name: 'intId',
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'intEmail',
            },
            {
                type: 'input',
                message: "What is the intern's school?",
                name: 'intSchool',
            }
        ])
    .then(response => {
        let { intName, intId, intEmail, intSchool } = response;
        let intern = new Intern(intName, intId, intEmail, intSchool);
        myTeam.push(intern);
        mainMenu();
    })
}

function finishTeam() {

    for (let i = 0; i < myTeam.length; i++) {


    }
}


let htmlString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


</head>
<body>
    <div> </div>
    <div> </div>

</body>
</html>
`