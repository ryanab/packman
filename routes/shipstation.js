var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var controllers = require('../controllers')

router.post('/order/:account', function(req,res,next){
  //may need to perform some type of hashing on mongo id instead og using that as our webhook
  var orderUrl = req.body.resource_url
  var account = req.params.account
  var keys = {}
  controllers.profile.findById(account)
  .then(function(result){
    keys.shipstationAPIKey = result.shipstationAPIKey
    keys.shipstationAPISecret = result.shipstationAPISecret
    return superagent
  })
  .get(orderUrl)
  .set('Accept', 'application/json')
  .auth(process.env.SHIPSTATION_API_KEY, process.env.SHIPSTATION_API_SECRET)
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
  return
})

router.get('/order', function(req, res, next){
  //First get working with my Shipstation ENV API keys; later the keys will have to be pulled from users accounr
  superagent
  .get('https://ssapi.shipstation.com/orders')
  .set('Accept', 'application/json')
  .auth(process.env.SHIPSTATION_API_KEY, process.env.SHIPSTATION_API_SECRET)
  .end(function(err, response){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    }
    res.json({
      confirmation: 'success',
      data: response.body
    })
  })
})

module.exports = router