const greet = require('./greeting')

describe('Greeting Kata', () => {
    test('Greet a single', () => {
        // arrange
        const name = 'Cristian'
        // act
        const method = greet(name)  
        // assert 
        expect(method).toBe('Hello, Cristian.');
    })
    test('Handle nulls', () => {
        // arrange
        const name = null
        // act
        const method = greet(name)
        // assert 
        expect(method).toBe('Hello, my friend.')
    })
    test('Handle shouting', () => {
        // arrange
        const name = 'JERRY'        
        // act        
        const method = greet(name)
        // assert 
        expect(method).toBe('HELLO JERRY!')
    })
})
