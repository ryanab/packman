var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var controllers = require('../controllers')

router.post('/order', function(req,res,next){
  var orderUrl = req.body.resource_url
  superagent
  .get(orderUrl)
  .set('Accept', 'application/json')
  .auth(process.env.SHIPSTATION_API_KEY, process.env.SHIPSTATION_API_SECRET)
  .end(function(err, response){
    if(err){
      console.log(err)
      return
    }
    var ordersArray = response.body.orders
    ordersArray.forEach(function(order, i){
      controllers.order.create(order)
      .then(function(response){
        //send this to firebase
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