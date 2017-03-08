var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var Profile = require('../controllers/ProfileController')
var Account = require('../controllers/AccountController')

router.get('/:action', function(req, res, next){
  var action = req.params.action
  
  //may need to add handling for searching a non-existant ID 
  if(action=='currentuser'){
    Account.currentUser(req)
    .then(function(result){
      res.json({
        confirmation: 'success',
        user: result
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    })
  }

  if(action=='logout'){
    req.session.reset()
    res.json({
      confirmation: 'success',
      user: null
    })
    return
  }
})

router.post('/:action', function(req, res, next){
  var action = req.params.action

  if(action=='register'){
    Account.register(req)
    .then(function(result){
      res.json({
        confirmation: 'success',
        user: result.user,
        token: result.token //will use later for authenticated requests
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    })
  }

  if(action=='login'){
    Account.login(req)
    .then(function(result){
      res.json({
        confirmation: 'success',
        user: result
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    })
  }
})

module.exports = router