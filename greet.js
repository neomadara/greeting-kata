const Greet = (name) => {
    if (name === null) {
        return `Hello, my friend.`
    }
    return `Hello, ${name}.`
}

module.exports = Greet
