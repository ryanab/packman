import React, { Component } from 'react'
import { Home } from './components/layout'
import { Provider } from 'react-redux'

class App extends Component {
  render(){
    return (
      <Provider store={this.props.route.initial}>
        <Home { ...this.props} />
      </Provider>
    )
  }
}

export default App