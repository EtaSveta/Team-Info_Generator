const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //call paretn comsntructo r here
        super(name, id, email);


        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;