var mongoose = require('mongoose')

var OrderSchema = new mongoose.Schema({
  orderId: {type: String, default: ''},
  orderNumber: {type:String, default:''},
  orderDate: {type:Date, default:Date.now()},
  createDate: {type:Date, default:Date.now()},
  shipByDate: {type:Date, default:Date.now()},
  orderStatus: {type:String, default:''},
  shipTo: {type:mongoose.Schema.Types,Mixed, default:{}},
  orderTotal: {type:String, default:''},
  customerNotes: {type:String, default:''},
  internalNotes: {type:String, default:''},
  gift: {type:String, default:''},
  giftMessage: {type:String, default:''},
  items: {type:[mongoose.Schema.Types.Mixed], default:[]},
  packed: {type:Boolean, default:false},
  account: {type: String, default:''},
  timestamp: {type:Date, default: Date.now()}
})

OrderSchema.methods.summary = function(){
  var summary = {
    orderId: this.email,
    orderNumber: this.account,
    orderDate: this.orderDate,
    createDate: this.createDate,
    shipByDate: this.shipByDate,
    orderStatus: this.orderStatus,
    shipTo: this.shipTo,
    orderTotal: this.orderTotal,
    customerNotes: this.customerNotes,
    internalNotes: this.internalNotes,
    gift: this.gift,
    giftMessage: this.giftMessage,
    items: this.items,
    packed: this.packed.toString(),
    account: this.account,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('OrderSchema', OrderSchema)