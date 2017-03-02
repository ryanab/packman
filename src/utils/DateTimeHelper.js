var dateFormat = require('dateformat')

export default {

  formatDate: (dateTime) => {
    let formatted = dateFormat(dateTime, "mm/dd/yyyy")
    return formatted 
  },

  formatTime: (dateTime) => {
    let formatted = dateFormat(dateTime, "h:MM TT")
    return formatted 
  }

}
