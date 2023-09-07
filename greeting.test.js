const greet = require('./greeting')

describe('Greeting Kata', () => {
    test('Requirement 1', () => {
        // arrange
        const name = 'cris'
        const result = 'Hello, cris.'

        // act
        const resultGreet = greet(name)

        // assert
        expect(resultGreet).toBe(result)
    })
    test('Requirement 2', () => {
        // arrange
        const name = null
        const result = 'Hello, my friend.'

        // act
        const resultGreet = greet(name)

        // assert
        expect(resultGreet).toBe(result)
    })
})
