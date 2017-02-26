var express = require('express')
var router = express.Router()

router.post('/order', function(req,res,next){

  console.log(JSON.stringify(req))
  res.json({
    confirmation: 'success',
    data: null
  })
})

module.exports = router