function greet(name) {
    const greetText = name ?? 'my friend'
    return  `Hello, ${greetText}.`
}

module.exports = greet;
