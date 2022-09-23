const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create a Manager object with properties for name, id, email and office number that match user input", () => {
            const name = 'Betty Boss';
            const id = 100;
            const email = 'betty@boss.com';
            const office = 5005;

            const obj = new Manager("Betty Boss", 100, "betty@boss.com", 5005);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.office).toEqual(office);
        });

        // it("should throw an error if not provided a 'text' value", () => {
        //   const cb = () => new Todo();
        //   const err = new Error(
        //     "Expected parameter 'text' to be a non empty string"
        //   );

        //   expect(cb).toThrowError(err);
        // });
    });

    describe('Role method', () => {
        it("should return the string 'Manager'", () => {
            const role = 'Manager';

            const obj = new Manager("Betty Boss", 111, "betty@boss.com", 500);

            expect(obj.getRole()).toEqual(role);
        });
    })
});
