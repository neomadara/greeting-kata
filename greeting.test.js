const greet = require('./greeting')

describe('Greeting Kata', () => {
    test('Greet a single', () => {
        const name = 'Cris'
        const result = 'Hello, Cris.'

        const greetResult = greet(name)

        expect(greetResult).toBe(result)
    })
    test('Handle nulls', () => {
        const name = null
        const result = 'Hello, my friend.'

        const greetResult = greet(name)

        expect(greetResult).toBe(result)
    })
})
