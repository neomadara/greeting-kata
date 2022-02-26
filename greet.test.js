const Greet = require('./greet')

describe('Greeting Kata', () => {
    test('greet a single', () => {
        // preparation
        const name = 'Cristian'
        // execution
        const execution = Greet(name)
        // expect
        const expected = `Hello, ${name}.`

        expect(execution).toBe(expected)
    })
    test('handle nulls by using a stand-in', () => {
        // preparation
        const name = null
        // execution
        const execution = Greet(name)
        // expect
        const expected = `Hello, my friend.`

        expect(execution).toBe(expected)
    })
})
