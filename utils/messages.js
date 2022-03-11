const moment = require('moment')

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment().locale('vi').format("dddd, DD MMMM YYYY, hh:mm:ss a")
    }
}

module.exports = formatMessage