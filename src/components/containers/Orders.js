import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { Order } from '../view'

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
        <div>
          <h1>ORDERS</h1>
          <h3>To be Packed</h3>
          {
            (this.props.nonPackedOrders.length==0) ? <h3>All packed</h3> :
            <ol>
              {
                this.props.nonPackedOrders.map((order, i) => {
                  return <li key={order.id}> <Order order={order}/> </li>
                })
              }
            </ol>
          }
          <br /> <br /> <br />
          <h3>Recently Packed</h3>
          {
            (this.props.nonPackedOrders.length==0) ? <h3>No Recent Data Avialable</h3> :
            <ol>
              {
                this.props.recentlyPackedOrders.map((order, i) => {
                  return <li key={order.id}>{order.id + ':  PACKED:   ' + order.packed}</li>
                })
              }
            </ol>
          }
        </div>

        <div className="row">
          <div className="col-md-12">
              <div className="portlet light ">
                  <div className="portlet-title">
                      <div className="caption">
                          <i className="icon-social-dribbble font-green"></i>
                          <span className="caption-subject font-green bold uppercase">Simple Table</span>
                      </div>
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
                  </div>
                  <div className="portlet-body">
                      <div className="table-scrollable">
                          <table className="table table-hover">
                              <thead>
                                  <tr>
                                      <th> # </th>
                                      <th> First Name </th>
                                      <th> Last Name </th>
                                      <th> Username </th>
                                      <th> Status </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td> 1 </td>
                                      <td> Mark </td>
                                      <td> Otto </td>
                                      <td> makr124 </td>
                                      <td>
                                          <div className="btn-group">
                                              <button type="button" className="btn btn-default">Left</button>
                                              <button type="button" className="btn btn-default">Middle</button>
                                              <button type="button" className="btn btn-default">Right</button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td> 2 </td>
                                      <td> Jacob </td>
                                      <td> Nilson </td>
                                      <td> jac123 </td>
                                      <td>
                                          <span className="label label-sm label-info"> Pending </span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td> 3 </td>
                                      <td> Larry </td>
                                      <td> Cooper </td>
                                      <td> lar </td>
                                      <td>
                                          <span className="label label-sm label-warning"> Suspended </span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td> 4 </td>
                                      <td> Sandy </td>
                                      <td> Lim </td>
                                      <td> sanlim </td>
                                      <td>
                                          <span className="label label-sm label-danger"> Blocked </span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
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