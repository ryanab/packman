var express = require('express')
var router = express.Router()

router.post('/order', function(req,res,next){

  console.log(JSON.stringify(req.body))
  return
})

module.exports = router