// const moment = require('moment')
const todayDate = new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'})

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: todayDate
    }
}

module.exports = formatMessage