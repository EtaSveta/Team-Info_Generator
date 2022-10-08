const inquirer = require('inquirer');
const generateEmployees = require('./src/generate-HTML');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const promptManager = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!')
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your company id? (Required)',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter your id')
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter email address')
                return false;
              }
            }
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log('Please enter office number')
                return false;
              }
            }
        }, 
    ]) 
    .then(data => {
        console.log(data);
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        console.log(team)
        addTeamMembers();
    })
    // .then((data) => {
    //     const genEmp = generateEmployees(team)
    //     console.log(genEmp);
    //     return finishTeam(genEmp);
    // })
    .catch((error) => {
        console.log(error);
    })
};

const addTeamMembers = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMoreEmployees',
            message: 'Would you like to add more employees to the team?',
            choices: ['Engineer','Intern', 'No, build website']
        }
    ]) 
    .then(choice => {
        switch (choice.addMoreEmployees) {
            case 'Engineer':
                promptEngineer();
                break; 
            case 'Intern':
                promptIntern();
                break;
            case 'No':
                finishTeam();
        }
    })   
}

function finishTeam() {
    fs.writeFile('./dist/index.html', generateEmployees(team), err => {
        if (err) throw err;
      
        console.log('HTML created');
      });
};

promptManager();