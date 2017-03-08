import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Landing, Home, ProfileInfo } from './components/layout'
import { Orders, Order } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'

const initialState = window.__PRELOADED_STATE__

class App extends Component{
  render(){
    return(
      <Provider store={store.configureStore(initialState)} >
        <Router history={browserHistory}>
          <Route path ="/app" component={Home} >
            <IndexRoute component={Orders} />
            <Route path="/order/:id" component={Order} />
            <Route path="/settings" component={Orders} />
          </Route>
          <Route path="/account" component={ProfileInfo} />
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

