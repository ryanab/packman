var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
  email: {type: String, default: ''},
  password: {type:String, default:''},
  shipstationAPIKey: {type:String, default:''},
  shipstationAPISecret: {type:String, default:''},
  account: {type: String, default:''},//parent account, for multipel users from one company
  timestamp: {type:Date, default: Date.now()}
})

ProfileSchema.methods.summary = function(){
  var summary = {
    email: this.email,
    account: this.account,
    timestamp: this.timestamp,
    shipstationAPIKey: this.shipstationAPIKey,
    shipstationAPISecret: this.shipStationAPISecret,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)
