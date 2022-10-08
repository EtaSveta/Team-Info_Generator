const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Sv', '8585596', 'sv@gmail.com', 'etaSveta');

test('test to get name from getName method', () => {
    expect(engineer.name).toBe('Sv');
})

test('test to get id from getId method', () => {
    expect(engineer.id).toBe('8585596');
})

test('test to get email from getEmail method', () => {
    expect(engineer.email).toBe('sv@gmail.com');
})

test('test to get github from getGithub method', () => {
    expect(engineer.github).toBe('etaSveta');
})

test('test to get position from getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer');
})