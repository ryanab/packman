var express = require('express'); 
var router = express.Router();
var Promise = require('bluebird')
var AccountController = require('../controllers/AccountController')
var validPages = ['login', 'register']

var React = require('react')
var ReactRouter = require('react-router')
var ReactDOMServer = require('react-dom/server')

var __BUILD_DIR__ = '../public/build' //may need to change on heorku
var serverapp = require(__BUILD_DIR__+'/es5/serverapp')
var store = require(__BUILD_DIR__+'/es5/stores/index')
var Home = require(__BUILD_DIR__+'/es5/components/layout/Home')

var matchRoutes = function(req, routes){
	return new Promise(function(resolve, reject){
		ReactRouter.match({ routes: routes, location: req.url }, function(error, redirectLocation, renderProps){
			if (error){
				reject(error)
				return
			}
			resolve(renderProps)
		})
	})
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  return
});

router.get('/app', function(req, res, next){
  var initialStore = null
  var reducers = {}
  AccountController.currentUser(req)
  .then(function(result){
    if(result==null){
      console.log('User is:' + result)
      throw new Error()
    }
    reducers['account'] = {user: null}
    reducers.account.user = result
  })
  .then(function(){
    initialStore = store.configureStore(reducers)
    var routes = {
      path: '/app',
      component: serverapp,
      initial: initialStore,
      indexRoute: {
        component: Home
      }
    }
    return matchRoutes(req, routes)
  })
	.then(function(renderProps){
		var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
		html = '<div>'+html+'</div>'
	    res.render('main', { react: html, preloadedState: JSON.stringify(initialStore.getState()) })
	    return
	})
	.catch(function(err){
		console.log('NOT LOGGED IN: ' + err.message)
	  return res.redirect('/')
	})  
})

router.get('/:page', function(req, res, next){
  var page = req.params.page
  if (validPages.indexOf(page)==-1){
    res.redirect('/')
    return
  }
  res.render(page)
  return
})

router.post('/:page', function(req, res, next) {
  var page = req.params.page
  if(page!='login' && page!= 'register'){
    res.redirect('/')
    return
  }
  
  if(page=='login'){
    AccountController.login(req)
    .then(function(result){
      if(result!=null){
        res.redirect('/app')
        return
      }
    })
    //will render login/reg templates with errors
    .catch(function(err){
      console.log(err)       
    })
  }

  if(page=='register'){
    AccountController.register(req)
    .then(function(result){
      console.log(JSON.stringify(result))
      if(result!=null){
        res.redirect('/app')
        return
      }
    })
    //will render login/reg templates with errors
    .catch(function(err){
      console.log(err)       
    })
  }

});


module.exports = router;
