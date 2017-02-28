import React, { Component }from 'react'
import { Link } from 'react-router'

export default (props) => {
    let order = props.order
    return (
      <tr>
          <td> 1 </td>
          <td> {order.orderId }  </td>
          <td> {order.orderDate } </td>
          <td> {order.orderDate } </td>
          <td> ShipStation </td>
          <td> {order.items.length}</td>
          <td>
            <span className="label label-sm label-success"> 1 </span>
            <span className="label label-sm label-warning"> 2 </span>
            <span className="label label-sm label-info"> 3 </span>
            <span className="label label-sm label-danger"> 4 </span>
          </td>
          <td><Link to={'/order/' + order.id}><button type="button" className="btn btn-default">Pack</button></Link></td>
      </tr>        
    )    
}