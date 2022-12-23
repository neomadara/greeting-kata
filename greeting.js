function greet(name) {
    return (name === null) ? 'Hello, my friend.' : `Hello, ${name}.`
}

module.exports = greet;
