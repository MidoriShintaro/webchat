const moment = require('moment')

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment().format("dddd, MMMM Do YYYY, hh:mm:ss a")
    }
}

module.exports = formatMessage