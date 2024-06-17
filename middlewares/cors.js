const injectPreflight = (req, res, next) => {
    res.set({
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Expose-Headers': '*'
    })

    next()
}

module.exports = injectPreflight