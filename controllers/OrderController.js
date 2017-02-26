var Order = require('../models/Order')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Order.find(params, function(err, orders){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(orders)
          return
        }

        var list = []
        orders.forEach(function(order){
          list.push(order.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Order.findById(id, function(err, order){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(order)
           return
        }
        resolve(order.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Order.create(params, function(err, order){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(order)
           return
        }
        resolve(order.summary())
      })
    })
  }
}