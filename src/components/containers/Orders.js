import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'

class Orders extends Component{

  componentDidMount(){
    //this.props.getNonpackedOrders({account: this.props.user.id, packed: false})
    this.props.getNonpackedOrders({packed: false})

  }

  packOrder(event, id){
    this.props.markOrderPacked({id: id, packed: true})
  }

  render(){
    return(
      <div>
        <h1>ORDERS</h1>
        <h3>To be Packed</h3>
        {
          (this.props.nonPackedOrders.list.length==0) ? <h3>All packed</h3> :
          <ol>
            {
              this.props.nonPackedOrders.list.map((order, i) => {
                return <li key={order.id}>{order.id + ':  PACKED:   ' + order.packed}</li>
              })
            }
          </ol>
        }
        <br /> <br /> <br />
        <h3>Recently Packed</h3>
        {
          (this.props.nonPackedOrders.list.length==0) ? <h3>All packed</h3> :
          <ol>
            {
              this.props.nonPackedOrders.list.map((order, i) => {
                return <li key={order.id}>{order.id + ':  PACKED:   ' + order.packed}</li>
              })
            }
          </ol>
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user,
    nonPackedOrders: state.order
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getNonpackedOrders:(params) => dispatch(actions.getNonpackedOrders(params)),
    markOrderPacked: (params) => dispatch(actions.markOrderPacked(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Orders)