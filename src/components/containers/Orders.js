import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'

class Orders extends Component{

  componentDidMount(){
    this.props.getOrders()
  }

  render(){
    return(
      <div>
        ORDERS
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(Orders)