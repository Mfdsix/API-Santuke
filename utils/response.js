const errResponse = (message) => {
    return {
        'success': false,
        'message': message,
        'data': null
    }
}

const succResponse = (data) => {
    return {
        'success': true,
        'message': 'success',
        'data': data
    }
}

module.exports = {
    errResponse,
    succResponse,
}