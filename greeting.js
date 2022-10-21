function greet(name) {
    if (!name) {
        return 'Hello, my friend.'
    }

    if(name.toUpperCase() === name) {
        return `HELLO ${name.toUpperCase()}!`
    }

    return `Hello, ${name}.`
}

module.exports = greet;
