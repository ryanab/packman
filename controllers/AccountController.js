var Profile = require('./ProfileController')
var Promise = require('bluebird')
var jwt = require('jsonwebtoken')


module.exports = {

  currentUser: function(req){
    return new Promise(function(resolve, reject){
      if(req.session==null || req.session.token==null){
        resolve(null)
      }
      jwt.verify(req.session.token, process.env.TOKEN_SECRET, function(err, decoded){
        if(err){
          req.session.reset()
          reject(err)
          return
        }
        Profile.findById(decoded.id, false)
        .then(function(result){
          resolve(result)
          return
        })
        .catch(function(err){
          reject(err)
          return
        })
      })
    })
  }
}