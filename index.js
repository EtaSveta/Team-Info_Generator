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
        // promptTeamGen();
        generateEmployees(data)
    })
    .then((data) => {
        const genEmp = generateEmployees(data)
        console.log(genEmp);
        return writeFile(genEmp);
    })
    .catch((error) => {
        console.log(error);
    })
};


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
        });
    });
};

promptManager();