const Intern = require('../lib/Intern');
const intern = new Intern('Sv', '8585596', 'sv@gmail.com', 'State University');

test('test to get name from getName method', () => {
    expect(intern.name).toBe('Sv');
})

test('test to get id from getId method', () => {
    expect(intern.id).toBe('8585596');
})

test('test to get email from getEmail method', () => {
    expect(intern.email).toBe('sv@gmail.com');
})

test('test to get office number from getSchool method', () => {
    expect(intern.school).toBe('State University');
})