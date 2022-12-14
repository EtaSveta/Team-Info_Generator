function createEmployees(employees) {
    const totalTeamMembers = [];
    //function to create manager
    const createManager = manager => {
        let managerCard = 
        `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h2>Manager</h2>
                    <h3><i class='fas fa-coffee'></i> ${manager.name}</h3>
                </div>
                <div class="card-body text-dark">
                    <ul class="list-group">
                        <li class="list-group-item ">ID ${manager.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                        <li class="list-group-item">Office Number ${manager.officeNumber}</li>
                    </ul>
                </div>        
            </div> 
        `;
        totalTeamMembers.push(managerCard);
    }

    const createEngineer = engineer => {
        let engineerCard = 
        `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>Engineer</h2>
            <h3><i class='fas fa-glasses'></i> ${engineer.name}</h3>
        </div>
        <div class="card-body text-dark">
            <ul class="list-group">
                <li class="list-group-item ">ID ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>        
    </div> 
        `;
        totalTeamMembers.push(engineerCard);
    }

    const createIntern = intern => {
        let internCard = 
        `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h2>Manager</h2>
                    <h3><i class='fas fa-coffee'></i> ${intern.name}</h3>
                </div>
                <div class="card-body text-dark">
                    <ul class="list-group">
                        <li class="list-group-item ">ID ${intern.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                        <li class="list-group-item">School ${intern.school}</li>
                    </ul>
                </div>        
            </div> 
        `;
        totalTeamMembers.push(internCard);
    }

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === 'Manager') {
            createManager(employees[i]);
        }
        if (employees[i].getRole() === 'Engineer') {
            createEngineer(employees[i]);
        }
        if (employees[i].getRole() === 'Intern') {
            createIntern(employees[i]);
        }
    }
    return totalTeamMembers.join('');

}

function generateEmployees(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />    
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <title>Company's Team</title>
</head> 
<body>
    <header class="row no-gutters bg-danger text-center">
        <h1 class=" text-light">Team of Employees</h1>
    </header>
    <main class="container">
        <div class="card-deck">

            ${createEmployees(employees)}

        </div>
    </main>
        
</body>
</html>    
    
    `
}   


module.exports = generateEmployees;