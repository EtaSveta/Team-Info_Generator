const Manager = require('../lib/Manager');
const manager = new Manager('Sv', '8585596', 'sv@gmail.com', '777');

test('test to get name from getName method', () => {
    expect(manager.name).toBe('Sv');
})

test('test to get id from getId method', () => {
    expect(manager.id).toBe('8585596');
})

test('test to get email from getEmail method', () => {
    expect(manager.email).toBe('sv@gmail.com');
})

test('test to get office number from getOfficeNumber method', () => {
    expect(manager.officeNumber).toBe('777');
})

test('test to get position from getRole method', () => {
    expect(manager.getRole()).toBe('Manager');
})