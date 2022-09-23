const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an Employee object with properties for name, id and email that match user input", () => {
            const name = 'Joey Test';
            const id = 253;
            const email = "joey@test.com";

            const obj = new Employee("Joey Test", 253, "joey@test.com");

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
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
        it("should return the string 'Employee'", () => {
            const role = 'Employee';

            const obj = new Employee("Joey Test", 253, "joey@test.com");

            expect(obj.getRole()).toEqual(role);
        });
    })
});
