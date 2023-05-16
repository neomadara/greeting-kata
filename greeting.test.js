const greet = require('./greeting')

describe('Greeting', () => {
    test('Write a method greet(name) that interpolates name in a simple greeting', () => {
        // arrange
        const name = 'cris'
        const result = 'Hello, cris.'
        // act
        const greetResult = greet(name)
        // assert
        expect(greetResult).toBe(result)
    })
    test('Handle nulls by introducing a stand-in', () => {
        // arrange
        const name = null
        const result = 'Hello, my friend.'
        // act
        const greetResult = greet(name)
        // assert
        expect(greetResult).toBe(result)
    })
})
