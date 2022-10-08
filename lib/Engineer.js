const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call paretn comsntructo r here
        super(name, id, email);
        
        //adding github to Engineer's profile
        this.github = github;
    }

    getGithub() {
        return this.github;
    }  
    
    getRole() {
        return "Engineer"
    }
}        
module.exports = Engineer;