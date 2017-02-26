var express = require('express')
var router = express.Router()

router.post('/order', function(req,res,next){
  var body = req.body
  console.log(JSON.stringify(body))
  return
})

module.exports = router