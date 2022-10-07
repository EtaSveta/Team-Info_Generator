const Employee = require('../lib/Employee');
const employee = new Employee('Sv', '8585596', 'sv@gmail.com');

test('test to get name from getName method', () => {
    expect(employee.name).toBe('Sv');
})

test('test to get id from getId method', () => {
    expect(employee.id).toBe('8585596');
})

test('test to get email from getEmail method', () => {
    expect(employee.email).toBe('sv@gmail.com');
})

test('test to get position from getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
})