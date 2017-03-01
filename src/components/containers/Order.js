import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {OrderItem } from '../view'

class Order extends Component {
    //create seperate view components for the duplicate render code
    render(){
      let items = this.props.orders[this.props.params.id].items
      let packed = []
      let notPacked = []
      
      items.forEach((item, i) => {
        if(item.packed){
          packed.push(item)
        }else{
          notPacked.push(item)
        }
      })
      console.log('Packed: ' + JSON.stringify(packed))
      console.log('Not Packed: ' + JSON.stringify(notPacked))
        return (
          <div>
            <div className="col-lg-6">
                  <div className="portlet light portlet-fit ">
                      <div className="portlet-body" style={{padding: '0px'}}>
                          <div className="mt-element-list">
                              <div className="mt-list-head list-news font-white bg-blue">
                                  <div className="list-head-title-container">
                                      <span className="badge badge-primary pull-right">3</span>
                                      <h3 className="list-title">Items to be Packed</h3>
                                  </div>
                              </div>
                              <div className="mt-list-container list-news">
                              {
                                (notPacked.length==0) ? <h4>Nothing here</h4>
                                :
                                <ul>
                                {
                                  notPacked.map((item, i) =>{
                                    return <OrderItem key={i} item={item}/>
                                  })  
                                }
                                </ul>
                              }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>    
              <div className="col-lg-6">
                    <div className="portlet light portlet-fit ">
                        <div className="portlet-body" style={{padding: '0px'}}>
                            <div className="mt-element-list">
                                <div className="mt-list-head list-news font-white bg-blue">
                                    <div className="list-head-title-container">
                                        <span className="badge badge-primary pull-right">3</span>
                                        <h3 className="list-title">Packed</h3>
                                    </div>
                                </div>
                                <div className="mt-list-container list-news">
                                {
                                  (packed.length==0) ? null
                                  :
                                  <ul>
                                  {
                                    packed.map((item, i) =>{
                                      return <OrderItem key={i} item={item}/>
                                    })  
                                  }
                                  </ul>
                                }
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
    orders: state.order
  }
}

const dispatchToProps = (dispatch) => {
  return {
    markAllItemsPacked: (params) => dispatch(actions.markAllItemsPacked(params))
  }
}

export default connect (stateToProps, dispatchToProps)(Order)
                                            
