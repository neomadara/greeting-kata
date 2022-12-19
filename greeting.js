function greet(name) {
    const HELLO = 'Hello,'

    if (name == null) return HELLO + ' my friend.'

    return HELLO + ` ${name}.`
}

module.exports = greet;
