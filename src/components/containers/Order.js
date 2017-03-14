import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { OrderItemList, OrderItem } from '../view'

class Order extends Component {

  constructor(){
    super()
    this.state = {
      packed: [],
      notPacked: [],
      scanned:''
    }
  }

  componentDidMount(){
    let order = this.props.orders[this.props.params.id]
    let packed = []
    let notPacked = []

    order.items.forEach((order, i)=> {
      if(order.packed){
        packed.push(order)
      }else{
        notPacked.push(order)
      }
    })

    this.setState({
      packed,
      notPacked
    })
  }

  componentWillUnmount(){
    this.refs.barcodeInput = ""
  }

  barcodeScanned(event){
    event.preventDefault()
    this.setState({
      scanned: event.target.value
    })
  }

  componentDidUpdate(){
    this.state.notPacked.forEach((item, i) => {
      if(item.sku==this.state.scanned){

        let updatedNotPacked = Object.assign([], this.state.notPacked)
        let updatedPacked = Object.assign([], this.state.packed)
        
        let scanned = updatedNotPacked[i]
        updatedNotPacked.splice(i, 1)
        updatedPacked.unshift(scanned)

        this.refs.barcodeInput.value = ""

        this.setState({
          scanned: '',
          packed: updatedPacked,
          notPacked: updatedNotPacked
        })
      }
    })
  }

  render(){
    return (
      <div>
        <div className="row">
          <input ref="barcodeInput" onChange={this.barcodeScanned.bind(this)} className="form-control" style={{marginBottom: 15}} placeholder="Please enter or scan a barcode"/>
        </div>
        <div className="row">
          <div className="col-lg-6">
            { (this.state.notPacked.length==0) ? 
              <h4>All Packed</h4> : <OrderItemList{...this.state.notPacked}/>
            }
          </div>
          <div className="col-lg-6">
            { (this.state.packed.length==0) ? 
              <h4>Nothing Here yet, get packing</h4> : <OrderItemList{...this.state.packed}/>
            }
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
                                            
