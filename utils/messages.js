const moment = require('moment')

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment()
    }
}

module.exports = formatMessage