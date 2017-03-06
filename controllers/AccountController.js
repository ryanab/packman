var ProfileController = require('./ProfileController')
var Promise = require('bluebird')

module.exports = {

  currentUser: function(req){
    return new Promise(function(resolve, rejecct){
      if(req.session==null || req.session.user==null){
        resolve(null)
      }
      ProfileController.findById(req.session.user, function(err, result){
        if(err){
          reject(err)
          return
        }
        resolve(result)
      })
    })
  }
}