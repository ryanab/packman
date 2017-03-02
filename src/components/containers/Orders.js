import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { OrderRow } from '../view'
import { browserHistory } from 'react-router'

class Orders extends Component{

  constructor(){
    super()
    this.state = {
      scanned: ''
    }
  }

  componentDidMount(){
    //this.props.getNonpackedOrders({account: this.props.user.id, packed: false})
    this.props.getNonpackedOrders({packed: false})
  }

  packOrder(event, id){
    this.props.markOrderPacked({id: id, packed: true})
  }

  barcodeScanned(event){
    let updated = event.target.value
    this.setState({
      scanned: updated
    })
  }

  componentDidUpdate(){
    let barcode = this.state.scanned
    this.props.nonPackedOrders.forEach((order, i) => {
      if(order.orderId == barcode){
        if(order.orderId==null || order.orderId=='')
          return 
        browserHistory.push('/order/' + order.id)
      }
      console.log()
    })
  }

  componentWillUnmount(){
    this.refs.barcodeInput = ""
  }

  render(){ 
    return(
          <div className={"col-md-12"}>
              <div className="portlet light ">
                  <div className="portlet-title">
                    <div className="actions">
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-cloud-upload"></i>
                        </a>
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-wrench"></i>
                        </a>
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-trash"></i>
                        </a>
                    </div>
                    <input ref="barcodeInput" onChange={this.barcodeScanned.bind(this)} placeholder="Scan a barcode" className="form-control"/>
                  </div>
                  <div className="portlet-body">
                      {
                        (this.props.nonPackedOrders.length==0) ? <h3>All packed</h3> :
                      <div className="table-scrollable">
                          <table className="table table-hover">
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th> Order ID </th>
                                      <th> Date </th>
                                      <th> Time </th>
                                      <th> Source </th>
                                      <th> Item Count </th>
                                      <th> Status </th>
                                  </tr>
                              </thead>
                                
                                  <tbody>
                                    {
                                      this.props.nonPackedOrders.map((order, i) => {
                                        return <OrderRow key={order.id} order={order}/>
                                      })
                                    }
                                  </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
    )
  }

}

const stateToProps = (state) => {
  return {
    user: state.account.user,
    nonPackedOrders: state.order.nonPackedList,
    recentlyPackedOrders: state.order.packedList
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getNonpackedOrders:(params) => dispatch(actions.getNonpackedOrders(params)),
    markOrderPacked: (params) => dispatch(actions.markOrderPacked(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Orders)