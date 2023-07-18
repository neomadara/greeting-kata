const greet = require('./greeting')

describe('Greeting', () => {
    test('Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is `"Bob"`, the method should return a string `"Hello, Bob."`', () => {
        // arrange
        const name = 'cristian'
        const result = "Hello, cristian."

        // act
        const greetResult = greet(name)

        // assert
        expect(greetResult).toBe(result)
    })
    test('Handle nulls by introducing a stand-in. For example, when `name` is null, then the method should return the string `"Hello, my friend."`', () => {
        // arrange
        const name = null
        const result = "Hello, my friend."

        // act
        const greetResult = greet(name)

        // assert
        expect(greetResult).toBe(result)
    })
})
