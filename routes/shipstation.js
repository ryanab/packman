var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var controllers = require('../controllers')

router.post('/order/:account', function(req,res,next){
  //may need to perform some type of hashing on mongo id instead og using that as our webhook
  var orderUrl = req.body.resource_url
  var account = req.params.account
    controllers.profile.findById(account)
    .then(function(result){
      var shipstationAPIKey = result.shipstationAPIKey
      var shipstationAPISecret = result.shipstationAPISecret
      superagent
      .get(orderUrl)
      .set('Accept', 'application/json')
      .auth(shipstationAPIKey, shipstationAPISecret)
      .end(function(err, response){
        if(err){
          console.log(err)
          return
        }
        //this must be moved to shipstation controller (this logic should not take place in route)
        var ordersArray = response.body.orders
        ordersArray.forEach(function(order, i){
          order.items.forEach(function(order, i){
            item.packed = false
          })
          order.account = account
          order.source = 'ShipStation'
          controllers.order.create(order)
          .then(function(response){
            //send this to firebase or socket
          })
          .catch(function(err){
            console.log(err)
          })
        })
      })
    })
  return
})

router.get('/order/:account', function(req, res, next){
  //Account passed in as work around until we set up authenticated requests
  var account = req.params.account
  controllers.profile.findById(account)
  .then(function(result){
    console.log('getting')
    var shipstationAPIKey = result.shipstationAPIKey
    var shipstationAPISecret = result.shipstationAPISecret
    superagent
    .get('https://ssapi.shipstation.com/orders/')
    .set('Accept', 'application/json')
    .auth(shipstationAPIKey, shipstationAPISecret)
    .end(function(err, response){
      if(err){
        console.log(err)
        return
      }
      //this must be moved to shipstation controller (this logic should not take place in route)
      var ordersArray = response.body.orders
      ordersArray.forEach(function(order, i){
        order.items.forEach(function(order, i){
          item.packed = false
        })
        order.account = account
        order.source = 'ShipStation'
        controllers.order.create(order)
        .then(function(result){
          res.json({
            confirmation: 'success',
            data: result
          })
          return
        })
        .catch(function(err){
          res.json({
            confirmation: 'fail',
            message: 'error retrieving orders from shipstation'
          })
          return
        })
      })
    })
  })
})

module.exports = router