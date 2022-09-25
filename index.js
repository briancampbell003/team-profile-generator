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
            message: "What is your team manager's name?",
            name: 'mgrName',
        },
        {
            type: 'input',
            message: "Manager's employee id?",
            name: 'mgrId',
        },
        {
            type: 'input',
            message: "Manager's email address?",
            name: 'mgrEmail',
        },
        {
            type: 'input',
            message: "Manager's office number?",
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
                message: "What is the engineer's name?",
                name: 'engName',
            },
            {
                type: 'input',
                message: "Engineer's employee id?",
                name: 'engId',
            },
            {
                type: 'input',
                message: "Engineer's email address?",
                name: 'engEmail',
            },
            {
                type: 'input',
                message: "Engineer's GitHub username?",
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
                message: "Intern's employee id?",
                name: 'intId',
            },
            {
                type: 'input',
                message: "Intern's email address?",
                name: 'intEmail',
            },
            {
                type: 'input',
                message: "Intern's school?",
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
    console.log(myTeam);
    console.log("Thank you! You will find your generated html file in the 'dist' folder of this directory.")

    let teamMemberCards = [];
    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].getRole() === 'Manager') {
            console.log(`${myTeam[i].name} is a cool manager`)
        }

    }

    let teamMemberCardsString = teamMemberCards.join(" ");
    renderPage(teamMemberCardsString);
}

function renderPage(teamMemberCardsString) {
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
        ${teamMemberCardsString}

    </body>
    </html>
    `
}