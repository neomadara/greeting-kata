const greet = require('./greeting')

describe('Greeting Kata', () => {
    test('Greet a single', () => {
        // preparar y ejecuta
         const result = greet('cristian')

        // comprobacion
        expect(result).toBe('Hello, cristian.')
    })
    test('Handle nulls', () => {
        const result = greet(null)

        expect(result).toBe('Hello, my friend.')
    })
})
