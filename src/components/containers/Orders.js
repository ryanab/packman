import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { OrderRow } from '../view'

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
                                      <th></th>
                                      <th> Order ID </th>
                                      <th> Date </th>
                                      <th> Time </th>
                                      <th> Source </th>
                                      <th> Item Count </th>
                                      <th> Status </th>
                                      <th></th>
                                  </tr>
                              </thead>
                                {
                                  (this.props.nonPackedOrders.length==0) ? <h3>All packed</h3>
                                  :
                                  <tbody>
                                    {
                                      this.props.nonPackedOrders.map((order, i) => {
                                        return <OrderRow order={order}/>
                                      })
                                    }
                                  </tbody>
                                }
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