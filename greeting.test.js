const greet = require('./greeting')

describe('TDD Kata', () => {
    test('Greet a single', () => {
        // preparas
        const greetResult = greet('Laura')

        // resultado
        expect(greetResult).toBe('Hello, Laura.');
    })
    test('Handle nulls by using a stand-in', () => {
        // preparas
        const greetResult = greet(null)

        // resultado
        expect(greetResult).toBe('Hello, my friend.');
    })
})
