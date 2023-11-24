const greet = require('./greeting')


describe('TDD', () => {
    test('Write a method greet(name) that interpolates name in a simple greeting. For example, when name is "Bob", the method should return a string "Hello, Bob.".', () => {
        // arrange
        const name = 'cris'
        const testingResult = 'Hello, cris.'

        // act
        const greetResult = greet(name)

        // assert
        expect(greetResult).toBe(testingResult)
    })
})
