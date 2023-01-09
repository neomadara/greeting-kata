function greet(name) {
    if (name === null) return 'Hello, my friend.'
    return 'Hello, ' + name + '.'
}

module.exports = greet;
