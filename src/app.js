import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Landing, Home } from './components/layout'
import { Orders } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends Component{
  render(){
    return(

      <Provider store={store.configureStore()} >
        <Router history={browserHistory}>
          <Route path="/" component={Landing} />
          <Route component={Home} >
            <Route path="/home" component={Orders} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

