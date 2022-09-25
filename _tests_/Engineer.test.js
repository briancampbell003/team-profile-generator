const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an Engineer object with properties for name, id, email and GitHub username that match user input", () => {
            const name = 'Sarah Sample';
            const id = 333;
            const email = 'sarah@sample.com';
            const github = "sarah333"

            const obj = new Engineer("Sarah Sample", 333, "sarah@sample.com", "sarah333");

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });

    });

    describe('Role method', () => {
        it("should return the string 'Engineer'", () => {
            const role = 'Engineer';

            const obj = new Engineer("Sarah Sample", 333, "sarah@sample.com", "sarah333");

            expect(obj.getRole()).toEqual(role);
        });
    })
});
