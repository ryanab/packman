var mongoose = require('mongoose')

var OrderSchema = new mongoose.Schema({
  orderId: {type: String, default: ''},
  orderNumber: {type:String, default:''},
  items: {type:[mongoose.Schema.Types.Mixed], default:[]},
  timestamp: {type:Date, default: Date.now()}
})

OrderSchema.methods.summary = function(){
  var summary = {
    orderId: this.email,
    orderNumber: this.account,
    items: this.items,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('OrderSchema', OrderSchema)