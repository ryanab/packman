var Profile = require('./ProfileController')
var Promise = require('bluebird')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

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
  },
  
  login: function(req){
    return new Promise(function(resolve, reject){
      Profile.find({email: req.body.email}, true)
      .then(function(results){
        if(results.length==0){
          throw new Error('No user found')
        }
        var profile = results[0]
        
        var isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password)
        if(isPasswordCorrect==false){
          throw new Error('Wrong password')
        }
        var token = jwt.sign({id: profile.id}, process.env.TOKEN_SECRET, {expiresIn: 4000})
        req.session.token = token
        resolve(profile.summary())
      })
      .catch(function(err){
        console.log('We have all the rejects here: ' + err.message)
        reject(err)
      })
    })
  },

  register: function(req){
    return new Promise(function(resolve, reject){
      Profile.create(req.body, false)
      .then(function(result){
        var token = jwt.sign({id: result.id}, process.env.TOKEN_SECRET, {expiresIn: 4000})
        req.session.token = token
        var returnObj = {
          user: result,
          token: token
        }
        resolve(returnObj) //may have to deal with token for auth requests later
      })
      .catch(function(err){
        reject(err)  
      })
    })
  }
}