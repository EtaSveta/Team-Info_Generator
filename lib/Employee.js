//constructor for the Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //geting name of employee
    getName() {
        return this.name;
    }
    
    //getting employee's id
    getId() {
        return this.id;
    }

    //getting employee's email address
    getEmail() {
        return this.email;
    }

    //assigning employee position
    getRole() {
        return "Employee"
    }

}

module.exports = Employee;