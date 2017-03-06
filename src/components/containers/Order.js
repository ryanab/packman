import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { OrderItem } from '../view'

class Order extends Component {

  componentDidMount(){
  
  }

  barcodeScanned(event){
    let updated = event.target.value
    this.setState({
      scanned: updated
    })
  }
  
  componentDidUpdate(){
    let barcode = this.state.scanned
    this.state.notPacked.forEach((item, i) => {
      if(item.sku == barcode){
        if(item.sku==null || item.sku=='')
          return
        item['packed'] = true
      }
    })
  }

  componentWillUnmount(){
    this.refs.barcodeInput = ""
  }
    
    render(){ 



        return (
            <div>
              <div className="row">
                <input ref="barcodeInput" onChange={this.barcodeScanned.bind(this)} className="form-control" style={{marginBottom: 15}} placeholder="Please enter or scan a barcode"/>
              </div>
              <div className="row">
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
                                  (this.state.notPacked.length==0) ? <h4>Nothing here</h4>
                                  :
                                  <ul>
                                  {
                                    this.state.notPacked.map((item, i) =>{
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
                                    (this.state.packed.length==0) ? null
                                    :
                                    <ul>
                                    {
                                      this.state.packed.map((item, i) =>{
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
                                            
